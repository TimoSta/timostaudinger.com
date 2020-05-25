import React from 'react'
import {Content} from '../util/dynamicContent'
import ContentCard from './ContentCard'

interface Props {
  title: string
  type: string
  content: Content[]
}

const Showcase = ({title, type, content}: Props) => (
  <div className="container">
    <h2>{title}</h2>

    <div className="contentGrid">
      {content.map((entry) => (
        <ContentCard key={entry.slug} content={entry} type={type} />
      ))}
    </div>

    <style jsx>{`
      .container {
        margin-top: 30px;
      }

      .contentGrid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    `}</style>
  </div>
)

export default Showcase
