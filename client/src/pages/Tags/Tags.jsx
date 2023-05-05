import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
  const tagsList = [{
    id: 1,
    tagName: 'java',
    tagDesc: 'for questions regarding programming in java and its various implementations. Please include all relevant tags in your question.'
  },{
    id: 2,
    tagName: 'javaScript',
    tagDesc: 'for questions regarding programming in javaScript and its various implementations. Please include all relevant tags in your question.'
  },{
    id: 3,
    tagName: 'php',
    tagDesc: 'for questions regarding programming in php and its various implementations. Please include all relevant tags in your question.'
  },{
    id: 4,
    tagName: 'react',
    tagDesc: 'for questions regarding programming in react and its various implementations. Please include all relevant tags in your question.'
  },{
    id: 5,
    tagName: 'mern',
    tagDesc: 'for questions regarding programming in mern and its various implementations. Please include all relevant tags in your question.'
  },{
    id: 6,
    tagName: 'python',
    tagDesc: 'for questions regarding programming in python and its various implementations. Please include all relevant tags in your question.'
  },{
    id: 7,
    tagName: 'dataStructures',
    tagDesc: 'for questions regarding programming in dataStructures and its various implementations. Please include all relevant tags in your question.'
  },{
    id: 8,
    tagName: 'C',
    tagDesc: 'for questions regarding programming in C and its various implementations. Please include all relevant tags in your question.'
  },{
    id: 9,
    tagName: 'android',
    tagDesc: 'for questions regarding programming in android and its various implementations. Please include all relevant tags in your question.'
  },{
    id: 10,
    tagName: 'xml',
    tagDesc: 'for questions regarding programming in xml and its various implementations. Please include all relevant tags in your question.'
  }]
  return (
    <div className='home-container-1'>
        <LeftSideBar/>
        <div className='home-container-2'>
          <h1 className='tags-h1'>Tags</h1>
          <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions</p>
          <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
          <div className='tags-list-container'>
            {
              tagsList.map((tag) => (
                <TagsList tag = {tag} key = {tag.id}/>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Tags