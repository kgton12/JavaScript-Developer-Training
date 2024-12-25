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
		professionalExperience = [],
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

function BuildProfile(profileData) {
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
			profileData.skills.softSkills,
		),
		profileData.languages,
		profileData.portfolio.map((portfolio) => new Portfolio(portfolio.name, portfolio.url, portfolio.github)),
		profileData.professionalExperience.map(
			(experience) => new ProfessionalExperience(experience.name, experience.period, experience.description),
		),
	);

	return profile;
}

function DisplayLoader() {
	document.getElementById("loader").classList.remove("hidden");
}

function HideLoadingScreen() {
	document.getElementById("loader").classList.add("hidden");
}

function ConstructLanguages(profile) {
	const languagesHTML = profile.languages
		.map((language) => `<li><i class="fas fa-check"></i>${language}</li>`)
		.join("");
	document.getElementById("profile.lenguages").innerHTML = languagesHTML;
}

function ConstructInfo(profile) {
	document.getElementById("profile.name").innerText = profile.name;
	document.getElementById("profile.job").innerText = profile.job;
	document.getElementById("profile.city").innerText = profile.location;
	document.getElementById("profile.linkdin").src = profile.linkdin;
	document.getElementById("profile.email").innerText = profile.email;
	document.getElementById("profile.photo").src = profile.photo;
	document.getElementById("profile.aboutme").innerText = profile.aboutme;
}

function ConstructPortifolio(profile) {
	const portfolioHTML = profile.portfolio
		.map(
			(portfolio) => `<li><span class="title"><i class="fa-brands fa-github"></i>${portfolio.name}</span>
                    <a href="${portfolio.url}" target="_blank">${portfolio.name}</a></li>`,
		)
		.join("");
	document.getElementById("profile.portifolio").innerHTML = portfolioHTML;
}

function ConstructProfessionalExperience(profile) {
	const experienceHTML = profile.professionalExperience
		.map(
			(experience) => `<li><span class="title">${experience.name}</span>
                     <span class="period">${experience.period}</span>
                     <p>${experience.description}</p></li>`,
		)
		.join("");
	document.getElementById("profile.experience").innerHTML = experienceHTML;
}

function ConstructSoftSkills(profile) {
	const softSkillsHTML = profile.skills.softSkills.map((softSkill) => `<li>${softSkill}</li>`).join("");
	document.getElementById("profile.soft-skills").innerHTML = softSkillsHTML;
}

function ConstructHardSkills(profile) {
	const hardSkillsHTML = profile.skills.hardSkills
		.map((hardSkill) => `<li><img src="${hardSkill.logo}" alt="${hardSkill.name}"></li>`)
		.join("");
	document.getElementById("tools-list").innerHTML = hardSkillsHTML;
}

(async () => {
	DisplayLoader();

	const profileData = await FetchProfileData();

	const profile = BuildProfile(profileData);

	ConstructInfo(profile);
	ConstructLanguages(profile);
	ConstructPortifolio(profile);
	ConstructProfessionalExperience(profile);
	ConstructSoftSkills(profile);
	ConstructHardSkills(profile);

	HideLoadingScreen();
})();
