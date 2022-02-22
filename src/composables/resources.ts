export function useResources() {
    const buttons = useState('buttons', () => ['/user','/menu'])
  
    return {
        buttons,
    }
  }
  