/* Write a function named crystalGazer() that takes four arguments: number of children, partner's name, geographic location and job title. Once the user passes the four arguments the program should output the following message on screen: 
You will be a job_title in location and married to partners_name with number_childrens.*/

function crystalGazer(childNum, partnerName, geoLocation, job) {
    console.log(`You will be a ` + job + ` in ` + geoLocation + ` and married to ` + partnerName + ` with ` + childNum + ` children.`);
}
crystalGazer(3, "Jessica", "Vienna", "Nurse");