import { Button } from '@nextui-org/button'
import { useReactToPrint } from 'react-to-print'
import { usePrintContext } from '../../context/PdfRefContext' 

const PrintButton: React.FC = () => {
  const { ref } = usePrintContext()

  const handlePrint = useReactToPrint({
    content: () => (ref?.current ? ref.current : null),
    // scale: 1,
    documentTitle: 'Resume',
  })

  return (
    <Button
      color='primary'
      variant='shadow'
      className='font-semibold rounded-md text-white dark:text-black dark:bg-white'
      onClick={handlePrint}
    >
      Download
    </Button>
  )
}

export default PrintButton
