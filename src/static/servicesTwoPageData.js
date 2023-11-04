const doctorData = [
  {
    type: "Doctor",
    name: "Jahongir",
    surname: "Mansurov",
    doctorImg:
      "https://t3.ftcdn.net/jpg/06/31/24/60/360_F_631246037_ajQMnkkymQgAEgvKJjpkyFLYw981U6tx.jpg",
    doctorData:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi delectus corrupti molestias libero eaque asperiores nam, culpa laboriosam labore.",
    whereTheDoctorStudied: "Qayerda oqiganligit",
    levelOfKnowledge: "Bilim darajasi",
    year: "1985",
    workActivity: "Qanchadan beri ishlashi haqida",
    workExperience: "ish tajribasi",
    phoneNumber: "+99890 997-62-20",
  },
  {
    type: "Doctor",
    name: "Qobilxon",
    surname: "Ahmadxonov",
    doctorImg:
      "https://media.istockphoto.com/id/482631083/photo/friendly-face-of-your-family-dentist.webp?b=1&s=170667a&w=0&k=20&c=nYzmOL4lWLWZWzB7mRyI6kexnaVJT3gtPtX9p8JKH3E=",
    doctorData:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi delectus corrupti molestias libero eaque asperiores nam, culpa laboriosam labore.",
    whereTheDoctorStudied: "Qayerda oqiganligit",
    levelOfKnowledge: "Bilim darajasi",
    year: "1975",
    workActivity: "Qanchadan beri ishlashi haqida",
    workExperience: "ish tajribasi",
    phoneNumber: "+99890 774-73-73",
  },
  {
    type: "Doctor",
    name: "Abdujalil",
    surname: "Ergashev",
    doctorImg:
      "https://traveltodentist.com/wp-content/uploads/revslider/the7-dental/slider-doc.jpg",
    doctorData:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi delectus corrupti molestias libero eaque asperiores nam, culpa laboriosam labore.",
    whereTheDoctorStudied: "Qayerda oqiganligit",
    levelOfKnowledge: "Bilim darajasi",
    year: "1982",
    workActivity: "Qanchadan beri ishlashi haqida",
    workExperience: "ish tajribasi",
    phoneNumber: "+99890 902-81-11",
  },
  {
    type: "Doctor",
    name: "Mansurxon",
    surname: "Samatov",
    doctorImg:
      "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_1170,h_780/https://www.ahcipa.com/wp-content/uploads/2021/02/dental-associate-job-1170x780.jpg",
    doctorData:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi delectus corrupti molestias libero eaque asperiores nam, culpa laboriosam labore.",
    whereTheDoctorStudied: "Qayerda oqiganligit",
    levelOfKnowledge: "Bilim darajasi",
    year: "1984",
    workActivity: "Qanchadan beri ishlashi haqida",
    workExperience: "ish tajribasi",
    phoneNumber: "+99895 551-22-22",
  },
];

const addetIdDoctorData = (addetId) => {
  return addetId.map((i, index) => (i ? { ...i, id: index } : i));
};

let doctorsData = addetIdDoctorData(doctorData);

export default doctorsData;
