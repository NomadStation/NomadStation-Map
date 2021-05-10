import React from 'react'
import { useRouter } from 'next/router'

import { PlaceList } from '../PlaceList/PlaceList'
import { PlaceData } from '../../@types/types'
import { getPlaceUrl } from '../../utils/utils'
import { removePlaceIDFromQuery } from '../../utils/routes'
import { SidePanel } from './SidePanel'
import { PanelControl } from './PanelControl'

type Props = {
  data?: PlaceData[]
  placeId?: string
}

export const Panel: React.FC<Props> = ({ data, placeId }) => {
  const router = useRouter()
  const [panelOpen, setPanelOpen] = React.useState(false)

  const onDetailClose = React.useCallback(async () => {
    await removePlaceIDFromQuery(window.location.search, router)
    if (!data || data.length === 0) {
      setPanelOpen(false)
    }
  }, [router, setPanelOpen, data])

  const onPanelClose = React.useCallback(async () => {
    setPanelOpen(false)
  }, [setPanelOpen])

  const onPanelOpen = React.useCallback(async () => {
    setPanelOpen(true)
  }, [setPanelOpen])

  React.useEffect(() => {
    if (placeId) {
      setPanelOpen(true)
    }
  }, [placeId])

  return (
    <>
      <PanelControl
        onClick={onPanelOpen}
        isOpen={panelOpen}
        data={data}
        placeId={placeId}
      />
      <SidePanel isOpen={placeId ? false : panelOpen} onMinimise={onPanelClose}>
        <PlaceList data={data} />
      </SidePanel>

      <SidePanel
        isOpen={panelOpen && Boolean(placeId)}
        onMinimise={onPanelClose}
        onClose={onDetailClose}
      >
        {placeId && (
          <iframe
            data-testid="panelIframe"
            className="pt-2 w-full h-full"
            src={getPlaceUrl(placeId as string)}
          />
        )}
      </SidePanel>
    </>
  )
}
Panel.displayName = 'Panel'
