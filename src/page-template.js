function renderManager(manager) {
    return `manager`;

}

function renderEngineers(engineer) {
    return `engineer`;
}

function renderInterns(intern) {
    return `intern`;
}

function generateTeam(teamMembers) {
    return `
    ${renderManager(teamMembers.manager)}
    ${renderManager(teamMembers.engineers)}
    ${renderManager(teamMembers.interns)}
    `
}

function render(teamMembers) {
    return "this wil be HTML";
}

module.exports = render;