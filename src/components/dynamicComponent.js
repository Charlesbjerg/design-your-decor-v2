import { sbEditable } from "@storyblok/storyblok-editable"
import Teaser from "./teaser"
import React from "react"
import Grid from "./bloks/grid"
import Hero from "./bloks/Hero"

const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'Hero': Hero,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return (<div {...sbEditable(blok)} content={blok}><Component blok={blok} /></div>)
  }
  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}

export default DynamicComponent