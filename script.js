document.addEventListener('DOMContentLoaded', function() {
    loadProfiles();
});

async function loadProfiles() {
    try {
        const response = await fetch('profiles.json');
        const profiles = await response.json();
        displayProfiles(profiles);
    } catch (error) {
        console.error('Error loading profiles:', error);
        document.getElementById('profile-wall').innerHTML =
            '<p>Error loading profiles. Please try again later.</p>';
    }
}

function displayProfiles(profiles) {
    const profileWall = document.getElementById('profile-wall');

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

        <div class="contact-links">
            ${profile.links.map(link => `<a href="${link.url}" target="_blank">${link.label}</a>`).join('')}
        </div>
    `;

    return card;
}