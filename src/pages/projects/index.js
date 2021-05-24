import React from 'react';
import Layout from '../../components/Layout';
import {Link, graphql} from 'gatsby';
import * as style from '../../css/projects.module.css';

function Projects({ data }) {
    const projects = data.projects.nodes;
    const {contact} = data.metadata.siteMetadata;
    // console.log(projects);

    return (<Layout>
        <main className={style.projects}>
            <h2>Portfolio</h2>
            <h3>Projects & Websites I've Created</h3>
            <section className={style.box}>
                { projects.map(proj => <div>
                    {/* <Link to={`/projects/${proj.frontmatter.slug}`}>  */}
                    <Link to={proj.frontmatter.link} target="_blank">
                        <h3> {proj.frontmatter.title} </h3>
                        <p> {proj.frontmatter.stack} </p>
                    </Link>
                    
                </div>) }
            </section>
            <section>
                <em>Like what you see? Email me at {contact} to get a quote.</em>
            </section>
        </main>
    </Layout>);
}
export default Projects;

// export page query
export const query = graphql`
    query ProjectPage {
        projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                id
                frontmatter {
                    title
                    stack
                    slug
                    link
                }
            }
        }
        metadata: site {
            siteMetadata {
                contact
            }
        }
    }
`;
