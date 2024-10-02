import Tabs from './components/tabs'
import ProfileForm from './components/form/ProfileForm'
import EducationForm from './components/form/EducationForm'
import SummaryForm from './components/form/SummaryForm'
import ExperinceForm from './components/form/ExperienceForm'
import SkillsForm from './components/form/SkillsForm'
import CertificateForm from './components/form/CertificateForm'

const Editor = () => {
  return (
    <Tabs>
      <div key='tab1' title='Personal Information'>
        <ProfileForm />
      </div>
      <div key='tab2' title='Professional Summary'>
        <SummaryForm />
      </div>
      <div key='tab3' title='Experience'>
        <ExperinceForm />
      </div>
      <div key='tab4' title='Education'>
        <EducationForm />
      </div>
      <div key='tab5' title='Skills'>
        <SkillsForm />
      </div>
      <div key='tab6' title='Certificates'>
        <CertificateForm/>
      </div>
    </Tabs>
  )
}

export default Editor
