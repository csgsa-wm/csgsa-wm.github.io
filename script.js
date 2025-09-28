let allProfiles = [];

document.addEventListener('DOMContentLoaded', function() {
    loadProfiles();
    setupFilters();
});

async function loadProfiles() {
    try {
        const response = await fetch('profiles.json');
        allProfiles = await response.json();
        displayProfiles(allProfiles);
        updateFilterCounts();
    } catch (error) {
        console.error('Error loading profiles:', error);
        document.getElementById('profile-wall').innerHTML =
            '<p>Error loading profiles. Please try again later.</p>';
    }
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter profiles
            filterProfiles(category);
        });
    });
}

function categorizeProfile(profile) {
    const securityKeywords = ['security', 'privacy', 'cryptographic', 'secure'];
    const systemsKeywords = ['iot', 'wireless', 'sensor', 'smart cities', 'edge', 'vehicle', 'gpu', 'architecture', 'systems', 'performance'];
    const aiKeywords = ['ai', 'machine learning', 'generative', 'image processing', 'explainable', 'interpretability', 'deep learning'];
    const softwareKeywords = ['software engineering', 'code analysis', 'code generation', 'large code models', 'code tasks', 'developer'];
    const hciKeywords = ['human-computer interaction', 'hci', 'human-llm', 'user experience', 'educational technology', 'mental health', 'cultural ai', 'human-ai'];
    const roboticsKeywords = ['robotics', 'computing', 'vehicle computing'];

    const researchText = profile.researchAreas.join(' ').toLowerCase();
    const interestsText = profile.interests.toLowerCase();
    const combinedText = researchText + ' ' + interestsText;

    const categories = [];

    if (securityKeywords.some(keyword => combinedText.includes(keyword))) {
        categories.push('security');
    }
    if (systemsKeywords.some(keyword => combinedText.includes(keyword))) {
        categories.push('systems');
    }
    if (aiKeywords.some(keyword => combinedText.includes(keyword))) {
        categories.push('ai');
    }
    if (softwareKeywords.some(keyword => combinedText.includes(keyword))) {
        categories.push('software');
    }
    if (hciKeywords.some(keyword => combinedText.includes(keyword))) {
        categories.push('hci');
    }
    if (roboticsKeywords.some(keyword => combinedText.includes(keyword))) {
        categories.push('robotics');
    }

    return categories;
}

function updateFilterCounts() {
    const categories = ['all', 'security', 'systems', 'ai', 'software', 'hci', 'robotics'];

    categories.forEach(category => {
        let count;
        if (category === 'all') {
            count = allProfiles.length;
        } else {
            count = allProfiles.filter(profile => {
                const profileCategories = categorizeProfile(profile);
                return profileCategories.includes(category);
            }).length;
        }

        const button = document.querySelector(`[data-category="${category}"] .count`);
        if (button) {
            button.textContent = `(${count})`;
        }
    });
}

function filterProfiles(category) {
    let filteredProfiles;

    if (category === 'all') {
        filteredProfiles = allProfiles;
    } else {
        filteredProfiles = allProfiles.filter(profile => {
            const profileCategories = categorizeProfile(profile);
            return profileCategories.includes(category);
        });
    }

    displayProfiles(filteredProfiles);
}

function displayProfiles(profiles) {
    const profileWall = document.getElementById('profile-wall');
    profileWall.innerHTML = ''; // Clear existing profiles

    profiles.forEach(profile => {
        const profileCard = createProfileCard(profile);
        profileWall.appendChild(profileCard);
    });
}

function createProfileCard(profile) {
    const card = document.createElement('div');
    card.className = 'profile-card';

    card.innerHTML = `
        <img src="${profile.photo}" alt="${profile.name}" class="profile-photo" onerror="this.src='https://via.placeholder.com/150/95a5a6/ffffff?text=${profile.name.split(' ').map(n => n[0]).join('')}'">
        <h3 class="profile-name">${profile.name}</h3>
        <p class="profile-program">${profile.program}</p>

        <div class="research-areas">
            <h4>Research Areas</h4>
            <ul>
                ${profile.researchAreas.map(area => `<li>${area}</li>`).join('')}
            </ul>
        </div>

        <div class="interests">
            <h4>Interests</h4>
            <p>${profile.interests}</p>
        </div>

        ${profile.happyToDiscuss ? `
        <div class="happy-to-discuss">
            <h4>💬 Happy to discuss about</h4>
            <div class="discussion-topics">
                ${profile.happyToDiscuss.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
            </div>
        </div>
        ` : ''}

        <div class="contact-links">
            ${profile.links.map(link => `<a href="${link.url}" target="_blank">${link.label}</a>`).join('')}
        </div>
    `;

    return card;
}