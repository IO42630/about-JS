
function check_status(issues) {
    issue_status;
    for (i =0; i< issues.length; i++) {
        issue = issues[i];
        // use the fact that checkbox has ID issue.getKey()
        x=  document.getElementById(issue).valueOf();
        issue_status = issue_status + x;
    }
    alert(issue_status);
}