import Tabs from './components/tabs'
import ProfileForm from './components/form/ProfileForm'
import EducationForm from './components/form/EducationForm'

const Editor = () => {
  return (
    <Tabs>
      <div key='tab1' title='Personal Information'>
        <ProfileForm />
      </div>
      <div key='tab2' title='Experience'>
        <EducationForm />
      </div>
      <div key='tab3' title='Education'>
        <h2>Tab 3 Content</h2>
      </div>
      <div key='tab4' title='Skills'>
        <h2>Tab 4 Content</h2>
      </div>
      <div key='tab5' title='Profile or Portfolio URL'>
        <h2>Tab 5 Content</h2>
      </div>
      <div key='tab6' title='More Details'>
        <h2>Tab 6 Content</h2>
      </div>
    </Tabs>
  )
}

export default Editor
