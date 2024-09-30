import Tabs from './components/tabs'
import ProfileForm from './components/form/ProfileForm'
import EducationForm from './components/form/EducationForm'
import SummaryForm from './components/form/SummaryForm'
import ExperinceForm from './components/form/ExperienceForm'
import SkillsForm from './components/form/SkillsForm'

const Editor = () => {
  return (
    <Tabs>
      <div key='tab1' title='Personal Information'>
        <ProfileForm />
      </div>
      <div key='tab2' title='Professional Summary'>
        <SummaryForm />
      </div>
      <div key='tab3' title='Education'>
        <EducationForm />
      </div>
      <div key='tab4' title='Experience'>
        <ExperinceForm />
      </div>
      <div key='tab5' title='Skills'>
        <SkillsForm />
      </div>
      <div key='tab6' title='Profile or Portfolio URL'>
        <h2>Tab 6 Content</h2>
      </div>
      <div key='tab7' title='More Details'>
        <h2>Tab 7 Content</h2>
      </div>
    </Tabs>
  )
}

export default Editor
