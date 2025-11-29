import { useRegisterSW } from 'virtual:pwa-register/react'

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log(`SW Registered: ${r}`)
    },
    onRegisterError(error) {
      console.log('SW registration error', error)
    },
  })

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return (
    <div className="p-4 fixed right-0 bottom-0">
      { (offlineReady || needRefresh)
        && <div className="p-4 rounded bg-gray-800 border border-gray-700">
            <div className="flex items-start">
              <div className="ml-3">
                { offlineReady
                  ? <h3 className="text-lg font-medium text-gray-200">App ready to work offline</h3>
                  : <h3 className="text-lg font-medium text-gray-200">New content available, click on reload button to update.</h3>
                }
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                { needRefresh && <button type="button" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700" onClick={() => updateServiceWorker(true)}>Reload</button> }
                <button type="button" className="ml-2 inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50" onClick={() => close()}>Close</button>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default ReloadPrompt
