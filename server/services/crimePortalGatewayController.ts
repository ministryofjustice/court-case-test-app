// eslint-disable-next-line import/prefer-default-export
export function callTheMirrorGateway(): Promise<any> {
  return fetch(
    'https://crime-portal-gateway-dev.apps.live-1.cloud-platform.service.justice.gov.uk/mirrorgateway/service/cpmgwextdocapi'
  )
}
