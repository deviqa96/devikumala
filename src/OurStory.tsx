import React, { Fragment, useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

require('./style/ourStory.css')

const cards = ['story-6.JPG', 'story-6.JPG', 'story-5.JPG', 'story-4.JPG', 'story-3.JPG', 'story-2.jpeg','story-1a.jpeg', 'story-1.JPG']
const story = [
  '2022 December 4, Engagement day',
  '2022 April 15, Prewedding photoshoot',
  '2022 March 13, Proposal',
  'Anniversary day celebration',
  "2018 August 1, Devi's Graduation",
  "2017 August 4, Charles' Graduation",
  '2017 February 14, First valentine date',
  '2016 December 6, First date',
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i: number) => ({ x: -1000, rot: 0, scale: 1.5, y: 0 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function Deck() {
  const [storyIndex, setStoryIndex] = useState(6)
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    if (velocity > 0) setStoryIndex(index <= 0 ? 7 : index - 1)
    else setStoryIndex(index)
    const trigger = velocity > 0.05 // If you flick hard enough it should trigger the card to fly out
    console.log(xDir);
    
    const dir = -1// xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) {
      gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    }
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <Fragment>
      <div className="bgDeckContainer center">
        <p className="textBig">Our</p>
        <p className="textCurly">Story </p>
      </div>
      <div className={'deckContainer'}>
        {props.map(({ x, y, rot, scale }, i) => {
          return (
            <animated.div className={'deck'} key={i} style={{ x, y }}>
              {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
              <animated.div
                {...bind(i)}
                style={{
                  transform: interpolate([rot, scale], trans),
                  backgroundImage: `url(images/${cards[i]})`,
                  backgroundSize: 'cover',
                }}
              />
            </animated.div>
          )
        })}
        <p className="storyDetail">{story[storyIndex]}</p>
      </div>
    </Fragment>
  )
}
