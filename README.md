# The Talking Portfolio : A Unique Self-Presentation Experience

The Talking Portfolio is not your typical portfolio website. It is an innovative approach to self-presentation, incorporating interactive guided tours that bring your profile to life. With multiple tabs covering various aspects of your background and achievements, this portfolio offers a comprehensive view of who you are and what you've accomplished.

## Key Features:

1. **Multiple Tabs:** The portfolio is divided into multiple tabs, each focusing on a specific aspect such as education, experience, skills, certifications, volunteer work, recognition, projects, and contact information. This ensures that visitors can explore different facets of your profile effortlessly.
<img width="1512" alt="image" src="https://github.com/AJ1904/portfolio/assets/49027490/07c03cb3-3c5d-4357-90cf-b36cc47eefcd">

2. **"Hear Me Out" Button:** At the heart of the Talking Portfolio is the "Hear Me Out" button. When clicked, it triggers an automated **Shepherd** tour of your entire profile. You don't need to click next or back; instead, the tour progresses seamlessly, providing insights into each section as if you were personally narrating your story.

<img width="165" alt="image" src="https://github.com/AJ1904/portfolio/assets/49027490/b111448a-0919-45ea-9c68-0c6aafc393f7">

3. **Audio Narration:** What sets this portfolio apart is the inclusion of audio narration for each step of the tour. As visitors navigate through your profile, they hear your voice or an AI-generated voice agent from the Web Speech API, delivering a personalized and engaging experience. Whether you're highlighting your educational background, detailing your work experience, or showcasing your projects, the audio narration adds a human touch, making the interaction more immersive.

4. **Custom Navigation:** A custom navigation bar allows visitors to explore different tabs manually if they prefer to delve into specific sections of your portfolio independently.

## Why Talking Portfolio?

- **Engaging User Experience:** Unlike traditional portfolios, the Talking Portfolio offers a dynamic and interactive user experience. Visitors feel like they are having a conversation with you as they navigate through your profile, enhancing engagement and retention.

- **Memorable Presentation:** By incorporating audio narration, the Talking Portfolio leaves a lasting impression on visitors. It is not just another static webpage; it is an opportunity to connect with your audience on a deeper level and leave them with a memorable experience.

- **Accessibility:** The use of audio narration ensures accessibility for all visitors, including those with visual impairments. Everyone can enjoy and engage with your portfolio content seamlessly.

The Talking Portfolio is more than just a showcase of your achievements; it is a storytelling platform that allows you to convey your personality, passion, and expertise effectively. Whether you are a job seeker, freelancer, entrepreneur, or creative professional, this innovative approach to self-presentation can set you apart in a competitive landscape. So, why settle for a boring portfolio when you can create an immersive and memorable experience for your visitors?

## Demo
- Watch [live](https://ayushrijain.netlify.app/) in action!
- Watch on [YouTube](https://youtu.be/6ZcpjSADpQI) or here:

https://github.com/AJ1904/portfolio/assets/49027490/b0d1af96-c0e8-4874-8e17-4f5872697ec2



## Installation and Running

To get started with this project, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/AJ1904/portfolio
```

### 2. Navigate to the Project Directory

```bash
cd portfolio
```

Navigate into the directory where you cloned the repository.

### 3. Install Dependencies

Make sure you have Node.js and npm installed on your machine. Then, install the project dependencies using npm:

```bash
npm install
```

### 4. Start the Development Server

Once the dependencies are installed, you can start the development server:

```bash
npm start
```


This command will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your web browser to view it.

### 5. Build for Production

To build the app for production, use:

```bash
npm run build
```

This command will create an optimized production build of your app in the `build` folder.

## FAQs
### 1. Audio files

Save your audio files in `src/audios` folder.

### 2. Customize tour 

Customize your tour by updating `src/components/TourShepherd.js` file.

### 3. Image files

Save your images and logo files in `src/assets` folder.

### 4. Update information

Update your information in the files of `src/components` folder.

## Additional Information

For more detailed instructions on using Create React App, React, Shepherd, and other dependencies, refer to their respective documentation:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/docs/getting-started.html)
- [Shepherd documentation](https://shepherdjs.dev/docs)


