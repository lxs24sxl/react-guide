// eslint-disable-next-line
import React from 'react';

export default class Blog extends React.Component {
  // eslint-disable-next-line
  constructor( props ) {
    super( props );
  }

  render() {
    let props = this.props;
    let posts = props.posts;
    const sidebar = (
      <ul>
        { posts.map(post => 
          <li key={ post.id }>
            { post.title }
          </li>
        )}
      </ul>
    );
    const content = posts.map( post => 
      <div key={post.id}>
        <h3>{ post.title }</h3>
        <p>{ post.content }</p>
      </div>
    );
    // return (
    //   <div>
    //     { sidebar }
    //     <hr />
    //     { content }
    //   </div>
    // );
    return (
      <div>
        <ul>
          {
            posts.map( post => 
              <li key={post.id}>
                { post.title }
              </li>
            )
          }
        </ul>
        <hr />
        {
          posts.map( post => 
            <div key={ post.id }>
              <h3>{ post.title }</h3>              
              <p>{ post.content }</p>
            </div>
          )
        }
      </div>
    );
  }
}