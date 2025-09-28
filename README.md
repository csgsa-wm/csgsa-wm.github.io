# William & Mary Computer Science Graduate Student Wall

A community-driven website featuring profiles of PhD students in the William & Mary Computer Science department. Connect with fellow graduate students, explore diverse research areas, and find potential collaborators in our vibrant CS community.

## About This Project

This website showcases PhD students across multiple research labs, including their research areas, interests, and discussion topics. Students can filter profiles by research categories like Security & Privacy, Systems & Architecture, AI & Machine Learning, Software Engineering, HCI & Human-AI, and Robotics & Computing.

## How to Add or Update Your Profile

### Adding Your Profile

1. **Fork this repository** to your GitHub account
2. **Clone your fork** to your local machine
3. **Edit `profiles.json`** and add your profile entry following this format:

```json
{
  "name": "Your Name",
  "photo": "https://your-photo-url.com/image.jpg",
  "program": "PhD Student" or "PhD Candidate",
  "researchAreas": ["Area 1", "Area 2", "Area 3"],
  "interests": "Brief description of your research interests and focus areas.",
  "happyToDiscuss": ["Topic 1", "Topic 2", "Topic 3", "Topic 4"],
  "links": [
    {"label": "Website", "url": "https://your-website.com"},
    {"label": "Email", "url": "mailto:your-email@wm.edu"},
    {"label": "Lab", "url": "https://your-lab-website.com"}
  ]
}
```

4. **Commit your changes** and push to your fork
5. **Create a pull request** to the main repository

### Updating Your Profile

Follow the same process as adding a profile, but modify your existing entry in `profiles.json`.

### Removing Your Profile

Create a pull request that removes your entry from `profiles.json`.

## Profile Guidelines

- **Photo**: Use a professional headshot. If you don't have a photo URL, one will be generated automatically
- **Research Areas**: List 2-4 main research areas that best describe your work
- **Interests**: 1-2 sentences describing your research focus and goals
- **Happy to Discuss**: 3-5 topics you'd enjoy discussing with other students (can include both technical and non-technical topics)
- **Links**: Include your website, email, GitHub, LinkedIn, or lab page as relevant

## Questions?

Contact the CSGSA (via Discord) or create an issue in this repository if you need help with your profile submission.