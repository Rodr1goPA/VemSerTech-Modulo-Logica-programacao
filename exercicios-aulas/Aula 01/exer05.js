const array = [1,2,'henrique','27','professor','front end','ada',3,4,5,'Suel','18','Front End','Full Stack','CC',6,7,8]

const infoUser = array.splice(2,5);
const infoUser2 = array.splice(5,5);

console.log(`Informaçõs do usuário 1: ${infoUser}`)
console.log(array)
console.log(`Informaçõs do usuário 2: ${infoUser2}`)
