# Scan QR Code

## Introduction

The QR code scanning action can be added in the action panel block to facilitate navigation within the system.

## Example

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240612214013_rec_.mp4" type="video/mp4">
</video>

## User Guide

### Generate a QR Code

1. Suppose the page link to redirect to is: `https://localhost:13000/m/page/vyoiwa25jig`.
2. Extract the relative link starting from `/page/` from the mobile page URL, and use it to generate a QR code.
3. Create a new Markdown block and use the following code:

```markdown
<qr-code value="/page/tr8r70ajpko" type="svg"></qr-code>
```

4. Add a "Scan QR Code" action to scan and navigate to the corresponding page.

**Note**:
- The QR code scanning action only supports internal system relative links and must start with `/page/`.
- External page links are not supported at this time.

For further details, check the [Action Panel Block](/handbook/block-action-panel) documentation.
