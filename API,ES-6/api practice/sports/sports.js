//for get data by search
const searchTeam = () => {
    const search = document.getElementById('search-field');
    const searchValue = search.value;
    // console.log(searchValue);
    search.value = ''
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`;
    if (searchValue != 0) {
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.teams))
    }
    else {
        const teamsContainer = document.getElementById('team-container')
        const div = document.createElement('div')
        div.innerHTML =
            `
        <h5>Team Name : Not found </h5>
        `
        teamsContainer.append(div)
    }

}
//create div
const displaySearchResult = teams => {
    console.log(teams)
    const searchResult = document.getElementById('team-container');
    searchResult.textContent = ''
    teams.forEach(team => {
        console.log(team);
        const div = document.createElement('div');

        div.innerHTML = `
        <img width="50px" src="${team.strTeamBadge}" class="card-img-top" alt="...">

            <div class="card-body">
                <h5 class="card-title">Team Name :${team.strTeam}</h5>
                <p class="card-text">Team Description:${team.strDescriptionEN .slice(0,100)}</p>
            </div>   
        `;
        
        div.classList.add('card-style')
        searchResult.appendChild(div);
    })

}

