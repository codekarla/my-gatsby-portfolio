import React from 'react';
import Layout from '../../components/Layout';
import {graphql, Link} from 'gatsby';

function Projects({ data }) {
    const projects = data.allMarkdownRemark.nodes;
    console.log(projects);

    return (<Layout>
        <main>
            <h2>Portfolio</h2>
            <h3>Projects & Websites I've Created</h3>
            <section>
                { projects.map(proj => <div>
                    <Link to={`/projects/${proj.frontmatter.slug}`}> 
                        <h3> {proj.frontmatter.title} </h3>
                        <p> {proj.frontmatter.stack} </p>
                    </Link>
                    
                </div>) }
            </section>
        </main>
    </Layout>);
}

export default Projects;

// export page query
export const query = graphql`
    query ProjectPage {
        allMarkdownRemark {
            nodes {
                id
                frontmatter {
                    title
                    stack
                    slug
                }
            }
        }
    }
`;
