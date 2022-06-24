import {createClient, JsonMap as _JsonMap} from '@segment/analytics-react-native'
import {AmplitudeSessionPlugin} from '@segment/analytics-react-native-plugin-amplitude-session'

// `config` file is not committed, add your own segment key to debug
import {segmentKey} from './config'

const client = createClient({
    writeKey: segmentKey,
    trackAppLifecycleEvents: true,
    collectDeviceId: true,
    trackDeepLinks: true
})

client.add({plugin: new AmplitudeSessionPlugin()})

export default client

export interface JsonMap extends _JsonMap {}
