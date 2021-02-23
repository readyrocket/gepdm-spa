<h1>Web App Deliverfy</h1>
<br />
<h2>Guidelines</h2>

<br />

---

<br />

## Architecture

```markdown
- src
  - @types							// general types
  - components					// general components
    - Header						// usefull component
  - config							// low level config
  - context							// general context components
  - hooks								// general hooks
  - pages								// all application pages
    - landing						// landing page screen
      - components			// component for landing page
        - Button				// button component for landing page
  - routes							// routes for application
		- Private						// private routes
		- Public						// public routes
  - services						// services api etc.
  - styles 							// global styles
  - utils								// general utils for application
```

---

## Styles

### Emotion Dependencies
- @emotion/react
- @emotion/styled

### Emotion insipired SMACSS pattern

```javascript
export const Screen = {
	layout: {
		Header,
		Content,
		Footer,
	},
	with: {
		Container,
		Button,
		Background,
		Label,
		Input,
		ErrorMessage,
	},
}
```

---
