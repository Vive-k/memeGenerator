import {Component} from 'react'

import {
  PageContainer,
  Title,
  PicContainerForSD,
  TextInPicture,
  Form,
  Label,
  Input,
  PicContainerForLD,
  GenerationButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    dataToCreateMeme: {},
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
  }

  gettingImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  gettingTopText = event => {
    this.setState({topText: event.target.value})
  }

  gettingBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  gettingFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  generating = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, fontSize} = this.state
    this.setState({dataToCreateMeme: {imageUrl, topText, bottomText, fontSize}})
  }

  render() {
    const {dataToCreateMeme} = this.state
    const {imageUrl, topText, bottomText, fontSize} = dataToCreateMeme
    return (
      <PageContainer>
        <div>
          <Title>Meme Generator</Title>
          <PicContainerForSD bgurl={imageUrl}>
            <TextInPicture>{topText}</TextInPicture>
            <TextInPicture>{bottomText}</TextInPicture>
          </PicContainerForSD>

          <Form onSubmit={this.generating}>
            <Label htmlFor="image url">Image URL</Label>

            <Input
              id="image url"
              placeholder="Enter the Image URL"
              onChange={this.gettingImageUrl}
            />

            <Label htmlFor="top text">Top Text</Label>

            <Input
              id="top text"
              placeholder="Enter the Top Text"
              onChange={this.gettingTopText}
            />

            <Label htmlFor="bottom text">Bottom Text</Label>

            <Input
              id="bottom text"
              placeholder="Enter the Bottom Text"
              onChange={this.gettingBottomText}
            />

            <Label htmlFor="font size">Font Size</Label>

            <Input as="select" id="font size" onChange={this.gettingFontSize}>
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId}>{each.displayText}</option>
              ))}
            </Input>

            <GenerationButton type="submit">Generate</GenerationButton>
          </Form>
        </div>
        <PicContainerForLD bgurl={imageUrl} data-testid="meme">
          <TextInPicture fontsize={fontSize}>{topText}</TextInPicture>
          <TextInPicture fontsize={fontSize}>{bottomText}</TextInPicture>
        </PicContainerForLD>
      </PageContainer>
    )
  }
}

export default MemeGenerator
