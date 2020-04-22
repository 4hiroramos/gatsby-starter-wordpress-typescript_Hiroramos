import * as React from 'react';
import { Link, graphql } from 'gatsby'
import {RouteComponentProps} from "@reach/router"
import {
  SinglePostQuery
} from '../../types/graphql-types'
import Layout from '../layouts/index'

type Props = RouteComponentProps & {
  data: SinglePostQuery
}
const Component: React.FC<Props> = (props) => {
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{__html: props.data.wordpressPost.title}} />
      <section dangerouslySetInnerHTML={{__html: props.data.wordpressPost.content}} />
      <Link to='/'>Home</Link>
    </Layout>
  )
}
export default Component

export const pageQuery = graphql`
  query SinglePost($slug: String) {
    wordpressPost(slug: { eq: $slug }) {
      id
      slug
      title
      content
    }
  }
`