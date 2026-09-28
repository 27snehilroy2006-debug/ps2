const doctorFeeRange = [1500, 1700, 1900, 2100, 2300, 2500, 2700, 2900, 3200, 3500, 3800, 4000];
const availabilityTimes = ["9:00 AM - 12:00 PM", "10:00 AM - 1:00 PM", "2:00 PM - 5:00 PM", "4:00 PM - 7:00 PM"];

const departments = [
  "Cardiology","Dermatology","Neurology","Orthopedics","Pediatrics","Gynecology","ENT","General Medicine","Psychiatry","Ophthalmology","Urology","Dentistry",
  "Cardiology","Dermatology","Neurology","Orthopedics","Pediatrics","Gynecology","ENT","General Medicine","Psychiatry","Ophthalmology","Urology","Dentistry",
  "Cardiology","Dermatology","Neurology","Orthopedics","Pediatrics","Gynecology","ENT","General Medicine","Psychiatry","Ophthalmology","Urology","Dentistry",
  "Cardiology","Dermatology","Neurology","Orthopedics","Pediatrics","Gynecology","ENT","General Medicine","Psychiatry","Ophthalmology","Urology","Dentistry",
  "Cardiology","Dermatology","Neurology","Orthopedics","Pediatrics","Gynecology","ENT","General Medicine","Psychiatry","Ophthalmology","Urology","Dentistry",
  "Cardiology","Dermatology","Neurology","Orthopedics","Pediatrics","Gynecology","ENT","General Medicine","Psychiatry","Ophthalmology","Urology","Dentistry",
  "Cardiology","Dermatology","Neurology","Orthopedics","Pediatrics","Gynecology","ENT","General Medicine","Psychiatry","Ophthalmology","Urology","Dentistry",
  "Cardiology","Dermatology","Neurology","Orthopedics","Pediatrics","Gynecology","ENT","General Medicine","Psychiatry","Ophthalmology","Urology","Dentistry"
];

let doctors = [
  {name:"Dr. Rohan Chakraborty", status:"Available"},
  {name:"Dr. Rohan Salaria", status:"Available"},
  {name:"Dr. Rosan Sohan", status:"Busy"},
  {name:"Dr. Ratin Camelli", status:"Available"},
  {name:"Dr. Casan Sanger", status:"Available"},
  {name:"Dr. Aanya Gupta", status:"Available"},
  {name:"Dr. Arjun Kapoor", status:"Busy"},
  {name:"Dr. Neha Singh", status:"Available"},
  {name:"Dr. Kabir Sharma", status:"Available"},
  {name:"Dr. Simran Kaur", status:"Busy"},
  {name:"Dr. Aditya Verma", status:"Available"},
  {name:"Dr. Priya Nair", status:"Available"},
  {name:"Dr. Ishan Malhotra", status:"Busy"},
  {name:"Dr. Sana Ali", status:"Available"},
  {name:"Dr. Dev Mehta", status:"Available"},
  {name:"Dr. Kiara Jain", status:"Available"},
  {name:"Dr. Rahul Sen", status:"Busy"},
  {name:"Dr. Tanvi Bhatia", status:"Available"},
  {name:"Dr. Mohit Arora", status:"Available"},
  {name:"Dr. Ishita Roy", status:"Busy"},
  {name:"Dr. Yash Khanna", status:"Available"},
  {name:"Dr. Pooja Sethi", status:"Available"},
  {name:"Dr. Aarav Gill", status:"Busy"},
  {name:"Dr. Nisha Chawla", status:"Available"},
  {name:"Dr. Vivaan Das", status:"Available"},
  {name:"Dr. Anjali Rao", status:"Busy"},
  {name:"Dr. Harsh Vats", status:"Available"},
  {name:"Dr. Divya Mishra", status:"Available"},
  {name:"Dr. Rishabh Iyer", status:"Busy"},
  {name:"Dr. Zara Khan", status:"Available"},
  {name:"Dr. Kunal Patil", status:"Available"},
  {name:"Dr. Sneha Menon", status:"Busy"},
  {name:"Dr. Parth Joshi", status:"Available"},
  {name:"Dr. Esha Pandey", status:"Available"},
  {name:"Dr. Aniket Shah", status:"Busy"},
  {name:"Dr. Manya Agarwal", status:"Available"},
  {name:"Dr. Tushar Banerjee", status:"Available"},
  {name:"Dr. Shreya Tripathi", status:"Busy"},
  {name:"Dr. Omkar Nair", status:"Available"},
  {name:"Dr. Juhi Goyal", status:"Available"},
  {name:"Dr. Aman Dutta", status:"Available"},
  {name:"Dr. Rhea Srivastava", status:"Busy"},
  {name:"Dr. Zubin Thomas", status:"Available"},
  {name:"Dr. Aditi Sood", status:"Available"},
  {name:"Dr. Rayan Josan", status:"Busy"},
  {name:"Dr. Kavya Dewan", status:"Available"},
  {name:"Dr. Sarthak Mallick", status:"Available"},
  {name:"Dr. Bhavna Gupta", status:"Busy"},
  {name:"Dr. Naman Chauhan", status:"Available"},
  {name:"Dr. Palak Bansal", status:"Available"},
  {name:"Dr. Uday Shetty", status:"Busy"},
  {name:"Dr. Gauravi Kulkarni", status:"Available"},
  {name:"Dr. Samaira Khurana", status:"Available"},
  {name:"Dr. Vedant Bose", status:"Busy"},
  {name:"Dr. Hina Bedi", status:"Available"},
  {name:"Dr. Tejas Saini", status:"Available"},
  {name:"Dr. Sanvi Grover", status:"Busy"},
  {name:"Dr. Karan Dhawan", status:"Available"},
  {name:"Dr. Reema Pillai", status:"Available"},
  {name:"Dr. Varun Reddy", status:"Busy"},
  {name:"Dr. Preshita Anand", status:"Available"},
  {name:"Dr. Ahaan Lamba", status:"Available"},
  {name:"Dr. Mahek Fernando", status:"Busy"},
  {name:"Dr. Pranav Arora", status:"Available"},
  {name:"Dr. Ira Batra", status:"Available"},
  {name:"Dr. Daksh Kapoor", status:"Busy"},
  {name:"Dr. Tia Narang", status:"Available"},
  {name:"Dr. Sidharth Banik", status:"Available"},
  {name:"Dr. Namita Sinha", status:"Busy"},
  {name:"Dr. Raghav Puri", status:"Available"},
  {name:"Dr. Aisha Mirza", status:"Available"},
  {name:"Dr. Farhan Qureshi", status:"Busy"},
  {name:"Dr. Sia Walia", status:"Available"},
  {name:"Dr. Yuvraj Chawla", status:"Available"},
  {name:"Dr. Leena Rao", status:"Busy"},
  {name:"Dr. Vihaan Bedi", status:"Available"},
  {name:"Dr. Shruti Iyer", status:"Available"},
  {name:"Dr. Keshav Kalra", status:"Busy"},
  {name:"Dr. Diya Sood", status:"Available"},
  {name:"Dr. Laksh Mehra", status:"Available"},
  {name:"Dr. Anya Vora", status:"Busy"},
  {name:"Dr. Nikhil Shah", status:"Available"},
  {name:"Dr. Swara Pande", status:"Available"},
  {name:"Dr. Dhruv Kapoor", status:"Busy"},
  {name:"Dr. Mehul Taneja", status:"Available"},
  {name:"Dr. Jiya Nanda", status:"Available"},
  {name:"Dr. Ojas Khanna", status:"Busy"},
  {name:"Dr. Khushi Sethi", status:"Available"},
  {name:"Dr. Soham Bajaj", status:"Available"},
  {name:"Dr. Aarohi Duggal", status:"Busy"},
  {name:"Dr. Arnav Gill", status:"Available"},
  {name:"Dr. Riya Menon", status:"Available"},
  {name:"Dr. Nakul Chatterjee", status:"Busy"},
  {name:"Dr. Ira Verma", status:"Available"},
  {name:"Dr. Vedika Sharma", status:"Available"}
].map((doctor, index) => ({
  ...doctor,
  fee: `₹${doctorFeeRange[index % doctorFeeRange.length]}`,
  department: departments[index % departments.length],
  availability: doctor.status === "Available" ? availabilityTimes[index % availabilityTimes.length] : "Unavailable today"
}));

const patients = [
  {name:"Aarav Mehta", time:"10:00 - 11:00 AM", status:"Confirmed"},
  {name:"Meera Sharma", time:"11:15 AM - 12:15 PM", status:"Waiting"},
  {name:"Vihaan Patel", time:"1:00 - 2:00 PM", status:"Checked In"},
  {name:"Ananya Roy", time:"2:30 - 3:30 PM", status:"Confirmed"},
];

function toggleLogin(){
  document.getElementById('patientCard').classList.toggle('hidden');
  document.getElementById('doctorCard').classList.toggle('hidden');
}
function enter(role){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  if(role==='patient'){document.getElementById('patientDash').classList.add('active'); renderDoctors();}
  else{document.getElementById('doctorDash').classList.add('active'); renderSchedule();}
}
function logout(){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active')); document.getElementById('loginPage').classList.add('active');}
function renderDoctors(){
  document.getElementById('doctorList').innerHTML = doctors.map(d=>`
    <div class="doc-card"><div><b>${d.name}</b><br><small>${d.department}</small><br><small>Consultation Fee: ${d.fee} - ${d.status}</small><br><small class="availability"><b>Available:</b> ${d.availability}</small></div>
    <div><button class="btn-green" onclick="book('${d.name}')">Book Appointment</button></div></div>`).join('');
}
function searchDoctor(){
  let q = document.getElementById('searchDoc').value.toLowerCase();
  document.getElementById('doctorList').innerHTML = doctors.filter(d=>d.name.toLowerCase().includes(q)).map(d=>`
    <div class="doc-card"><div><b>${d.name}</b><br><small>${d.department}</small><br><small>Fee: ${d.fee}</small><br><small class="availability"><b>Available:</b> ${d.availability}</small></div><button class="btn-green" onclick="book('${d.name}')">Book Appointment</button></div>`).join('');
}
function renderSchedule(){
  document.getElementById('scheduleTable').innerHTML = `<tr><th>Patient</th><th>Time</th><th>Status</th><th>Action</th></tr>`+
  patients.map((p,i)=>`<tr><td>${p.name}</td><td>${p.time}</td><td>${p.status}</td><td><button onclick="openPres()">Prescription</button> ${i==1?`<button onclick="cancel()">Cancel</button>`:``}</td></tr>`).join('');
}
function book(doctorName='Selected doctor'){
  const notification = document.getElementById('appointmentNotification');
  notification.textContent = `Appointment booked with ${doctorName}. Confirmation is on the way.`;
  notification.classList.remove('hidden');
  document.getElementById('bookSuccess').style.display='flex';
}
function cancel(){document.getElementById('cancelModal').style.display='flex';}
function openPres(){document.getElementById('presModal').style.display='flex';}
function closeAll(){
  document.querySelectorAll('.modal').forEach(m=>m.style.display='none');
}
function savePres(){alert("Prescription Added - From Video 2"); closeAll();}