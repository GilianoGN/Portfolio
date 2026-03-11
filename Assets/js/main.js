function updateProfileInfo(profileData){
    const photo = document.getElementById("profile.photo");
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById("profile.name");
    name.textContent = profileData.name;

    const titulo = document.getElementById("profile.job");
    titulo.textContent = profileData.titulo;
    
    const email = document.getElementById("profile.email");
    email.href = `mailto:${profileData.email}`;
    email.textContent = profileData.email;

    const phone = document.getElementById("profile.phone");
    phone.href = `tel:${profileData.telefone}`;
    phone.textContent = profileData.telefone;

    const location = document.getElementById("profile.location");
    location.textContent = `${profileData.localidade.cidade} - ${profileData.localidade.estado} - ${profileData.localidade.pais}`;

    const linkedin = document.getElementById("profile.linkedin");
    linkedin.textContent = profileData.linkedin;
    linkedin.href = profileData.linkedin;
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById("profile.softSkills");
    softSkills.innerHTML = profileData.skills.softSkills.map(skill =>
        `<li>
            ${skill}
        </li>`
        ).join('');
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById("profile.hardSkills");
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill =>
        `<li class="hardSkill">
            <img src="${skill.logo}" alt="${skill.nome}">
        </li>`
        ).join(''); 
}

function updateLinguage(profileData){
    const linguage = document.getElementById("profile.linguage");
    linguage.innerHTML = profileData.idioma.map(idioma => `<li>${idioma}</li>`).join('');
}

function updateEducation(profileData){
    const education = document.getElementById("profile.education");
    education.innerHTML = profileData.educacao.map(educacao => 
        `<li>
            <span class="title">${educacao.curso} (${educacao.condicao})</span>
            <p class="School">${educacao.instituicao}</p>
            <p class="year">${educacao.periodo}</p>
        </li>`
    ).join('');
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById("profile.portfolio");
    portfolio.innerHTML = profileData.portfolio.map(portfolio =>
        `<li>
            <span class="title ${portfolio.plataforma}">${portfolio.nome}</span>
            <a href="${portfolio.linkar}">${portfolio.descricao}</a>
        </li>`
    ).join('');
}

function updateExperience(profileData){
    const experience = document.getElementById("profile.experiencie");
    experience.innerHTML = profileData.experiencia.map(experiencia =>
        `<li>
            <span class="title"><h2>${experiencia.funcao}</h2></span>
            <span class="company">${experiencia.empresa}</span>
            <p class="period">${experiencia.periodo}</p>
            <p class="description">${experiencia.descricao}</p>
        </li>`
    ).join('');
}

(async () => {
    const profiledata = await fetchProfileData();
    if (profiledata){
        console.log(profiledata);
        updateProfileInfo(profiledata);
        updateSoftSkills(profiledata);   
        updateHardSkills(profiledata);
        updateLinguage(profiledata);
        updateEducation(profiledata);
        updatePortfolio(profiledata);
        updateExperience(profiledata);
    }
})();