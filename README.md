# Feedback Widget UI Micro-Interaction

This project is a simple UI micro-interaction for a feedback widget built using Vite, Framer Motion, and Web Components. The widget provides a seamless and engaging way for users to give feedback on a website or application.

## Features

- **Smooth Animations:** Leveraging Framer Motion for fluid and responsive animations.
- **Web Components:** Built using modern Web Components for encapsulation and reusability.
- **Vite-Powered:** Fast development and build environment powered by Vite.

## Technologies Used

- **Vite:** A fast build tool that provides a great development experience.
- **Framer Motion:** A powerful animation library for React, used here to create smooth and interactive animations.
- **Web Components:** Custom HTML elements encapsulating functionality, ensuring modularity and reusability.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/feedback-widget.git
   cd feedback-widget
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or, if using Yarn:

   ```bash
   yarn install
   ```

   or, if using Bun:

   ```bash
   bun install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   or, if using Yarn:

   ```bash
   yarn dev
   ```

   or, if using Bun:

   ```bash
   bun run dev
   ```

## Usage

Once the development server is running, you can view the feedback widget by navigating to `http://localhost:5173` in your browser. The widget will display a button that triggers the feedback form with smooth animations when clicked.

## Project Structure

```plaintext
├── public/          # Static assets
├── src/
│   ├── assets/  # Public Images
│   ├── components/  # Feedback Components
│   ├── screen/  # Feedback Screens
│   ├── App.tsx      # Main application component
│   ├── web-componnets.tsx      # Custom Web Component
│   └── main.tsx      # Entry point
├── index.html       # Main HTML file
└── vite.config.ts   # Vite configuration
```

## Customization

You can customize the widget by modifying the Web Components and Framer Motion animations in the `src/components` and `src/screens` directories. The configuration is designed to be modular and easily adjustable.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request with your improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for the amazing animation library.
- [Vite](https://vitejs.dev/) for providing a fast and modern development environment.
