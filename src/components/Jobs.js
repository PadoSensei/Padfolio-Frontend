import React from "react"
// import Title from "./Title"
// import { FaAngleDoubleRight } from "react-icons/fa"
// import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"

// const query = graphql`
//   {
//     allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
//       nodes {
//         strapiId
//         company
//         date
//         position
//         description {
//           id
//           name
//         }
//       }
//     }
//   }
// `

const Jobs = () => {
  return (
    <div>Hello Jobs</div>
  )
}

// const Jobs = () => {
//   const data = useStaticQuery(query)
//   const {
//     allStrapiJobs: {nodes: jobs},
//   } = data
//   const [featuredJob, setFeaturedJob] = React.useState(0)
//   const { company, position, date, description } = jobs[featuredJob]
//   return (
//     <section className="section jobs">
//       <Title title="experience" />
//       <div className="jobs-center">
//         <div className="btn-container">
//           {jobs.map((item, index) => {
//             return (
//               <button 
//                 key={item.strapiId} 
//                 onClick={() => setFeaturedJob(index)}
//                 className={`job-btn ${index === featuredJob && "active-btn"}`}
//                 >
//                   {item.company}
//               </button>)
//           })}
//         </div>
//         <article className="job-info">
//           <h3>{position}</h3>
//           <h4>{company}</h4>
//           <p className="job-date">{date}</p>
//           {
//             description.map((item)=>{
//               return (
//                 <div key={item.id} className="job-desc">
//                   <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
//                   <p>{item.name}</p>
//                 </div>
//               )
//             })
//           }
//         </article>
//       </div>
//         <Link to="/about" className="btn center-btn">
//           More Info
//         </Link>
//     </section>

//   )
// }

export default Jobs
