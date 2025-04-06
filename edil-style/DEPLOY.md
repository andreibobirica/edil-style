# Deploying Edil Style to Home Assistant

This guide explains how to deploy the Edil Style Next.js application as a custom add-on in Home Assistant.

## Prerequisites

- Home Assistant installation (Supervised, OS, or Container)
- SSH access to your Home Assistant instance
- Git installed on your system

## Deployment Steps

### 1. Create a repository for your add-on

1. Create a new GitHub repository with the following structure:
   ```
   edil-style-addon/
   ├── edil-style/          # Your Next.js app
   ├── config.yaml          # Add-on configuration
   ├── Dockerfile           # Docker configuration
   ├── build.yaml           # Build configuration 
   ├── run.sh               # Add-on startup script
   └── README.md            # Documentation
   ```

2. Copy all the files from your Next.js app to the repository

### 2. Add your repository to Home Assistant

1. In Home Assistant, go to **Settings** > **Add-ons** > **Add-on Store**
2. Click the menu in the top-right corner and select **Repositories**
3. Add your repository URL: `https://github.com/yourusername/edil-style-addon`
4. Click **Add**

### 3. Install and run the add-on

1. The add-on should now appear in the add-on store
2. Click on "Edil Style Website"
3. Click **Install**
4. Once installed, click **Start**
5. Enable "Show in sidebar" for easy access
6. Check the logs to make sure everything is running properly

### 4. Access your website

Your website will be available at:
- Through the Home Assistant sidebar icon
- Via ingress: From your Home Assistant dashboard
- Direct access: `http://your-home-assistant-ip:3000`

## Troubleshooting

If you encounter issues:

1. Check the add-on logs
2. Verify your Dockerfile is properly configured
3. Make sure your Next.js application builds successfully
4. Ensure the ports are properly exposed in config.yaml 