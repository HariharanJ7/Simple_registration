# Registration Form with React, Redux, and Bootstrap

## Overview
This project is a **registration form** built using **React** with **Hooks** and **Redux** for state management. The form includes client-side validation, ensuring users provide valid information before submitting. **Bootstrap 5** is used for styling and responsiveness.

## Features
- **User Inputs:**
  - First Name (Required, max 50 characters)
  - Last Name (Required, max 50 characters)
  - Email (Required, valid email format)
  - Password (Required, min 8 characters, masked input)
  - Confirm Password (Must match the Password field)
  - Date of Birth (Required, user must be 18 years or older)

- **Validation:**
  - Client-side validation using **React Hooks**.
  - Display error messages below fields when validation fails.
  - Password masking for security.

- **State Management:**
  - Implemented using **Redux** to manage form state and error messages.

- **Styling:**
  - Styled with **Bootstrap 5** for a responsive and clean design.
  - Uses form classes like `form-group`, `form-control`, etc.

- **User Interaction:**
  - Validates input fields on form submission.
  - Displays clear error messages for incorrect inputs.
  - Sends valid data to the backend API.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/registration-form.git
   cd registration-form
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Usage
1. Open `http://localhost:3000/` in your browser.
2. Fill in the required fields.
3. Submit the form.
4. If validation fails, error messages will be displayed.
5. If validation passes, the data will be sent to the backend.

## Technologies Used
- **React** (with Hooks)
- **Redux** (for state management)
- **Bootstrap 5** (for UI styling)

## Folder Structure
```
registration-form/
├── src/
│   ├── components/  # Reusable form components
│   ├── redux/       # Redux store, actions, reducers
│   ├── styles/      # Custom styling
│   ├── App.js       # Main application
│   ├── index.js     # Entry point
│   ├── store.js     # Redux store setup
│   ├── validation.js # Validation logic
├── public/          # Static assets
├── package.json     # Dependencies and scripts
├── README.md        # Project documentation
```

## Contributing
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push the branch and submit a Pull Request.

## License
This project is licensed under the **MIT License**.

## Contact
For any inquiries, feel free to reach out!
- **Email:** your.email@example.com
- **GitHub:** [yourusername](https://github.com/HariharanJ7/Simple_registration/)

