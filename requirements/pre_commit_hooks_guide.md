# Pre-Commit Hooks Setup Guide

## What Are Pre-Commit Hooks?

Pre-commit hooks are automated scripts that run **before** you commit code to Git. They act as quality gates, preventing broken or poorly formatted code from entering your repository.

## Why This Matters

In professional development:
- ❌ **Without hooks**: Bad code gets committed → CI fails → Wastes team time
- ✅ **With hooks**: Bad code is caught locally → Fixed immediately → Clean commits

## What We're Checking

Our pre-commit hook runs:

1. **HTMLHint** - Validates HTML syntax
   - Self-closing tags (`<meta />` not `<meta>`)
   - Proper DOCTYPE declarations
   - Valid attribute usage

2. **Stylelint** - Enforces CSS standards
   - No duplicate selectors
   - Consistent formatting
   - Auto-fixes simple issues

## How It Works

```bash
# When you run git commit...
git commit -m "Add new feature"

# Husky intercepts and runs:
npx lint-staged

# lint-staged checks only staged files:
docs/**/*.html → htmlhint
docs/**/*.css → stylelint --fix

# If all pass ✅ → Commit succeeds
# If any fail ❌ → Commit is blocked
```

## Setup (Already Done in This Project)

### 1. Install Dependencies
```bash
npm install --save-dev husky lint-staged htmlhint stylelint
```

### 2. Initialize Husky
```bash
npm run prepare
# This creates .husky/ directory with hooks
```

### 3. Configure package.json
```json
{
  "scripts": {
    "prepare": "husky"
  },
  "lint-staged": {
    "docs/**/*.html": "htmlhint",
    "docs/**/*.css": "stylelint --fix"
  }
}
```

### 4. Create Pre-Commit Hook
File: `.husky/pre-commit`
```bash
npx lint-staged
```

## Testing Your Setup

### Test 1: Introduce an Error
```html
<!-- Bad: Missing self-closing slash -->
<meta charset="UTF-8">
```

```bash
git add .
git commit -m "Test commit"
# ❌ Should fail with HTMLHint error
```

### Test 2: Fix the Error
```html
<!-- Good: Self-closing -->
<meta charset="UTF-8" />
```

```bash
git add .
git commit -m "Fixed HTML"
# ✅ Should succeed
```

## Common Issues & Solutions

### Issue: "Husky not found"
**Solution:**
```bash
npm install
npm run prepare
```

### Issue: "Hook didn't run"
**Solution:**
```bash
# Make hook executable
chmod +x .husky/pre-commit

# Verify it exists
ls -la .husky/
```

### Issue: "Linting passes locally but fails in CI"
**Causes:**
1. Different Node versions (local vs CI)
2. Cached node_modules
3. Files not staged properly

**Solution:**
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Run full lint manually
npm run lint
```

## CI/CD Integration

Our GitHub Actions workflow (`.github/workflows/lighthouse-ci.yml`) runs the same checks:

```yaml
- name: Lint HTML & CSS
  run: npm run lint

- name: Run Lighthouse CI
  run: npm run lhci
```

This creates a **two-layer defense**:
1. **Pre-commit**: Catches errors locally (fast feedback)
2. **CI/CD**: Final validation on push (ensures consistency)

## Best Practices

### ✅ Do
- Run `npm run lint` before pushing
- Fix linting errors, don't bypass hooks
- Keep your dependencies updated
- Test hooks after changing configuration

### ❌ Don't
- Use `git commit --no-verify` (bypasses hooks)
- Commit without testing locally first
- Ignore CI failures and merge anyway
- Mix tabs and spaces in code

## Bypassing Hooks (Emergency Only)

In rare cases (e.g., documenting a bug), you can skip hooks:

```bash
git commit --no-verify -m "Emergency fix"
```

**⚠️ Warning**: CI will still fail if code is bad. Only use this if absolutely necessary.

## Advanced Configuration

### Auto-fix CSS on Commit
Already enabled! Stylelint runs with `--fix`:
```json
"lint-staged": {
  "docs/**/*.css": "stylelint --fix"
}
```

### Add TypeScript/JavaScript Linting
```json
"lint-staged": {
  "docs/**/*.html": "htmlhint",
  "docs/**/*.css": "stylelint --fix",
  "src/**/*.ts": "eslint --fix"
}
```

### Format with Prettier
```json
"lint-staged": {
  "*.{html,css,js,json,md}": "prettier --write"
}
```

## Troubleshooting Commands

```bash
# Check Husky installation
npx husky

# List all hooks
ls -la .husky/

# Test lint-staged manually
npx lint-staged

# Run full linting suite
npm run lint

# Check specific files
npx htmlhint docs/index.html
npx stylelint docs/client_site/style.css
```

## Learning Resources

- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)
- [HTMLHint Rules](https://htmlhint.com/docs/user-guide/list-rules)
- [Stylelint Rules](https://stylelint.io/user-guide/rules/list)

## Summary

Pre-commit hooks are your **first line of defense** against code quality issues. They:
- Save time by catching errors early
- Maintain consistent code standards
- Reduce CI/CD failures
- Build good development habits

Remember: **Green CI is a team effort!** 🚀
