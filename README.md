<div align="center">

<img height="110" src="LynxHubIcon.png" alt="LynxHub Icon">

# [LynxHub](https://github.com/KindaBrazy/LynxHub) Module Development Guide

Guide on how to create module for LynxHub

</div>

## Table of Contents

- [Setup Environment](#setup-environment)
- [Developing Module](#developing-module)
- [Module Configuration and API Reference](#module-configuration-and-api-reference)
    - [lynxModule.json Tips](#lynxmodulejson-tips)
    - [renderer.ts Tips](#rendererts-tips)
    - [main.ts Tips](#maints-tips)

## Setup Environment

Follow these steps to set up your environment for building and testing your module:

1. **Install LynxHub** using one of the following options:
    - **[Install from release]()**
    - **[Clone and build from source]()**
2. **Locate the app data folder**:
    - Launch LynxHub
    - Navigate to the Settings page
    - Go to Data Management -> Data
        - Note: You can change the path in this section if desired
3. **Create a module folder**:
    - Open the `Modules` folder in the app data directory
    - Create a new folder for your module
4. [Develop and build your module](#developing-module)
5. **Install your module**:
    - Place your built module data inside the folder you created in step 3
6. **Restart LynxHub**
7. **Verify module loading**:
    - Your module should now be loaded and ready to use
    - If you don't see your module, check the main and renderer console logs for any errors

## Developing Module

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KindaBrazy/LynxHub-Module-Guide
   cd LynxHub-Module-Guide
   ```

2. **Install dependencies**:
   ```bash
   npm i
   ```

3. **Configure module information**:
    - Edit the [lynxModule.json](./lynxModule.json) file with your module details
    - Refer to the [lynxModule.json tips](#lynxmodulejson-tips) for guidance

4. **Set up compilation path**:
    - In [index.js](./index.js), update the `compiledPath` variable (line 9) with your module's path in the app data
      folder:
      ```javascript
      const compiledPath = path.join('C:\\Users\\USERNAME\\Documents\\LynxHub\\Modules\\YourModuleName');
      ```

5. **Implement renderer functionality**:
    - Edit the [renderer.ts](./src/renderer.ts) file
    - Check [renderer.ts tips](#rendererts-tips)

6. **Implement main process functionality**:
    - Edit the [main.ts](./src/main.ts) file
    - Check [main.ts tips](#maints-tips)

7. **Build and install your module**:
    - Automatic build and install:
      ```bash
      npm run build:move
      ```
    - Manual build and install:
      ```bash
      npm run build
      ```
      Then copy [lynxModule.json](./lynxModule.json) and the compiled `scripts` folder to the app modules
      folder

> [!IMPORTANT]
> For LynxHub to recognize your module, ensure the following structure:
>
> **Root folder**
> - `lynxModule.json` file
> - `scripts` folder
>
> **Inside scripts folder**
> - `renderer.mjs` file
> - `main.mjs` file

## Module Configuration and API Reference

For detailed information on data types and descriptions, refer to the [types.d.ts](./src/types.d.ts) file. Additional
important information not covered in the d.ts file or JSON will be explained below.

### [lynxModule.json](./lynxModule.json) Tips

- `id`: Unique identifier for your module to prevent conflicts
- `requireAppBuild`: The LynxHub build number your module is compatible with
    - Find this in the app under Settings -> About
    - Used to check compatibility if the module API changes in future updates
- `repoUrl`: GitHub repository URL for cloning and updating your module
    - Where **lynxModule.json** file exist
- `changeLog`: Document update changes
    - Use `\n` for line breaks (other escape characters like `\t` are not supported)

### [renderer.ts](./src/renderer.ts) Tips

- Must have a default export
- Executes in the Electron renderer process (browser environment)
- Use this file for UI-related functionality and user interactions

### [main.ts](./src/main.ts) Tips

- Must have a default export
- Executes in the Electron main process (Node.js environment)
- Use this file for system-level operations and background tasks

---

> [!TIP]
>
> - I'm continuously working to enhance LynxHub's modularity and customization options.
    >

- In future updates, modules will be able to install and manage their own AI interfaces, rather than relying solely on
  LynxHub's built-in options.

> [!TIP]
>
> **Extensions**: While I can't provide an exact timeline, I'm planning to implement a system for extensions that will
> offer complete customization and modification capabilities.