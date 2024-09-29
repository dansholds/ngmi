# Not Gonna Make It

"Not Gonna Make It" is a web application that provides predictive analytics on the likelihood of success for a given Twitter user. Leveraging advanced algorithms and user input, the app generates a percentage score indicating the user's projected trajectory. The application is built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), featuring a sleek design and dark mode functionality.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Features

- **Predictive Analytics**: Input a Twitter username to receive a calculated percentage indicating their likelihood of "making it."
- **Dynamic Scoring Mechanism**: Each submission recalculates the score, providing up-to-date analytics based on the latest data.
- **Dark Mode Toggle**: Users can switch between light and dark themes to enhance their viewing experience.
- **Responsive Design**: Optimized for various devices, ensuring accessibility and usability across desktops, tablets, and mobile phones.

## Demo

Check out the live demo: [Not Gonna Make It](https://notgonnamakeit.dev)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/dansholds/ngmi.git
   cd your-repo-name
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. **Open the app in your browser**

   Navigate to `http://localhost:3000` to see the application running.

## Usage

1. **Enter a Twitter Username**

   - Type a Twitter username into the input field.

2. **Submit the Form**

   - Click the "Submit" button or press "Enter" to initiate the analysis.

3. **View the Prediction**

   - The app will display a percentage score along with a message indicating the user's projected success.

4. **Repeat as Needed**

   - You can perform multiple analyses as desired.

5. **Toggle Dark Mode**

   - Click the moon/sun icon in the top-right corner to switch between light and dark themes.

## Project Structure

```
your-project/
├── public/
│   └── favicon.ico
├── src/
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       └── global.css
├── package.json
├── tailwind.config.cjs
└── astro.config.mjs
```

- **public/**: Static assets like the favicon.
- **src/pages/**: Contains the main Astro page (`index.astro`).
- **src/scripts/**: JavaScript files responsible for the app's functionality.
- **src/styles/**: Global styles using Tailwind CSS.
- **tailwind.config.cjs**: Configuration for Tailwind CSS.
- **astro.config.mjs**: Configuration for Astro.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. **Fork the repository**
2. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit your changes**

   ```bash
   git commit -m "Add your feature"
   ```

4. **Push to the branch**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a pull request**

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- **Astro**: For providing a powerful and flexible static site generator.
- **Tailwind CSS**: For the utility-first CSS framework that makes styling efficient.
- **Heroicons**: For the high-quality icons used in the application.

## Contact

- **Author**: Your Name
- **Website**: [grapplingdev.com](https://grapplingdev.com)
- **Twitter**: [@grapplingdev](https://x.com/grapplingdev)
- **GitHub**: [dansholds](https://github.com/dansholds)
