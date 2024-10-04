class HardSkill {
    constructor(name = "", logo = "") {
        this.name = name;
        this.logo = logo;
    }
}

class Portfolio {
    constructor(name = "", url = "", github = true) {
        this.name = name;
        this.url = url;
        this.github = github;
    }
}

class ProfessionalExperience {
    constructor(name = "", period = "", description = "") {
        this.name = name;
        this.period = period;
        this.description = description;
    }
}

class Skills {
    constructor(hardSkills = [], softSkills = []) {
        this.hardSkills = hardSkills;
        this.softSkills = softSkills;
    }
}

class Profile {
    constructor(
        name = "",
        photo = "",
        job = "",
        location = "",
        phone = "",
        email = "",
        aboutme = "",
        skills = new Skills(),
        languages = [],
        portfolio = [],
        professionalExperience = []
    ) {
        this.name = name;
        this.photo = photo;
        this.job = job;
        this.location = location;
        this.phone = phone;
        this.email = email;
        this.aboutme = aboutme;
        this.skills = skills;
        this.languages = languages;
        this.portfolio = portfolio;
        this.professionalExperience = professionalExperience;
    }
}

(async () => {
    const profileData = await fetchProfileData();

    const profile = new Profile(
        profileData.name,
        profileData.photo,
        profileData.job,
        profileData.location,
        profileData.phone,
        profileData.email,
        profileData.aboutme,
        new Skills(
            profileData.skills.hardSkills.map((skill) => new HardSkill(skill.name, skill.logo)),
            profileData.skills.softSkills
        ),
        profileData.languages,
        profileData.portfolio.map((portfolio) => new Portfolio(portfolio.name, portfolio.url, portfolio.github)),
        profileData.professionalExperience.map((experience) => new ProfessionalExperience(experience.name, experience.period, experience.description))
    );

    console.log(profile);

    document.getElementById("profile.name").innerText = profile.name;
    document.getElementById("profile.job").innerText = profile.job;
    document.getElementById("profile.city").innerText = profile.location;
    document.getElementById("profile.phone").innerText = profile.phone;
    document.getElementById("profile.email").innerText = profile.email;
    document.getElementById("profile.photo").src = profile.photo;
    document.getElementById("profile.aboutme").innerText = profile.aboutme;

    const lenguages = document.getElementById("profile.lenguages");

    profile.languages.forEach((language) => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fas fa-check"></i>${language}`;
        lenguages.appendChild(li);
    });

    const portifolio = document.getElementById("profile.portifolio");

    profile.portfolio.forEach((portfolio) => {
        const li = document.createElement("li");

        const portfolioHTML = `<span class="title"
                                ><i class="fa-brands fa-github"></i> ${portfolio.url}</span>
                                <a href="${portfolio.url}" target="_blank">${portfolio.name}</a>`;
        li.innerHTML = portfolioHTML;
        portifolio.appendChild(li);
    });

    const professionalExperience = document.getElementById("profile.experience");

    profile.professionalExperience.forEach((experience) => {
        const li = document.createElement("li");

        const experienceHTML = `<span class="title">${experience.name}</span>
                                <span class="period">${experience.period}</span>
                                <p>${experience.description}</p>`;
        li.innerHTML = experienceHTML;
        professionalExperience.appendChild(li);
    });

    const softSkills = document.getElementById("profile.soft-skills");

    profile.skills.softSkills.forEach((softSkill) => {
        const li = document.createElement("li");
        li.innerHTML = softSkill;
        softSkills.appendChild(li);
    });

    profile.skills.hardSkills.forEach((hardSkill) => {
        const li = document.createElement("li");
        const hardSkillsHTML = `<img src="${hardSkill.logo}" alt="${hardSkill.name}`;
        li.innerHTML = hardSkillsHTML;
        hardSkill.appendChild(li);
    });
})();
