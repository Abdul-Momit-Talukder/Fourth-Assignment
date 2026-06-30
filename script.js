const jobs = [
  {
    company: "Mobile First Corp",
    role: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
  },
  {
    company: "WebFlow Agency",
    role: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends."
  },
  {
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking."
  },
  {
    company: "CloudFirst Inc",
    role: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure."
  },
  {
    company: "Innovation Labs",
    role: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required."
  },
  {
    company: "MegaCorp Solutions",
    role: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,00",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities."
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included."
  },
  {
    company: "TechCorp Industries",
    role: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: " $130,000 - $175,000",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects."
  }
];

const jobContainer = document.getElementById("cardContainer");
const totalJob1 = document.getElementById("jobCount");
const totalJob2 = document.getElementById("totalJobCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectCount");


function updateJobCount(){
    totalJob1.innerText = jobContainer.children.length;
    totalJob2.innerText = jobContainer.children.length;
}









