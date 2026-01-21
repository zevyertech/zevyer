# GitHub Repository Setup Instructions

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `zevyer-digital-growth-solutions` (or your preferred name)
3. Description: "Zevyer - 360° Digital Marketing, Custom Development & AI Solutions Website"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

## Step 2: Copy the Repository URL

After creating the repo, GitHub will show you the repository URL. It will look like:
- `https://github.com/YOUR_USERNAME/zevyer-digital-growth-solutions.git` (HTTPS)
- OR `git@github.com:YOUR_USERNAME/zevyer-digital-growth-solutions.git` (SSH)

## Step 3: Run These Commands

Once you have the repository URL, run these commands in your terminal:

```bash
cd D:\zevyer-digital-growth-solutions

# Add the remote (replace YOUR_USERNAME and REPO_NAME with your actual values)
git remote add origin https://github.com/YOUR_USERNAME/zevyer-digital-growth-solutions.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Use the Script Below

After creating the repo, I can help you add the remote and push. Just provide me with your GitHub username and repository name.
