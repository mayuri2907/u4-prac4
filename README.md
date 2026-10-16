# Practical 4: Controlled Form (Unit 4)

## Aim
Develop a Student Registration Form using controlled components where input values are managed using React `useState()` and displayed after form submission.

## GitHub Repository
`https://github.com/mayuri2907/u4-prac4.git`

## Concepts Implemented
- **Controlled Components**: Form inputs receive their value directly from React state (`value={formData.fullName}`) and trigger a state update via `onChange={handleChange}`.
- **Single State Object**: Efficiently tracks text fields, select dropdowns, radio buttons, and checkboxes in a unified `formData` state object.
- **Form Submission**: On `onSubmit`, the application validates inputs and stores the data in a `submittedData` state to display formatted registration output.

## How to Run Locally
```bash
npm install
npm run dev
```

## Push to GitHub
```bash
git remote add origin https://github.com/mayuri2907/u4-prac4.git
git branch -M main
git push -u origin main
```
