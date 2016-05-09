

"To mitigate interference in such a crowded band, BLE uses frequency hopping, but in contrast to regular Bluetooth, BLE
stays longer on the same channel and makes timing requirements much more relaxed compared to regular Bluetooth."

"Three RF channels are dedicated for advertising functions that allow the discovery of devices available in vicinity."
"Upon a connection request, the same channels are used for initial connection parameter exchanges"
"Once a device is discovered and connection is initiated, regular data channels are used for communication"[3]

Communication between the controller and host is

Advertisement has a big impact on power consumption?

advertising interval is critical in quick connectionc

## Physical layer
The 2.4 GHz spectrum for BT extends from 2402MHz to 2480MHz. LE uses 40 1MHz wide channels, numbered 0 to 39. Each is separated by 2MHz.

Channel 37, 38, 39 are used only for sending advertisement packets. The rest are used for data exchange during a connection. During BLE advertisement, 
a BLE Peripheral device transmits packets on the 3 advertising channels one after the other. A Central device scanning for devices or beacons will listen
to those channels for the advertising packets, which helps it discover device nearby. Channels 37, 38, 39 are spread across 2.4GHz spectrum on purpose. 37 and
39 are the first and last channels in the band, while 38 is in the middle. If any single advertising channel is blocked, the other channels are likely to be 
free.

This is especially true since most other devices that interfer with BLE are narrow band. Channel 38 in particular was placed between WiFi channel 1 and 6 so it
avoids the WiFi signal. The wide spacing of the advertisement channels help BLE better manage interference from WiFi, classic bluetooth, microwave, baby monitor.
Ensure that advertisements succeed.

## Advertisement interval
When a BLE peripheral device is in advertisement mode, the time interval between packets has both a fixed interval and a random delay

  "You can set the fixed interval from 20ms to 10.24 seconds, in steps of 0.625ms"

  "The random delay is pseudo random value from 0ms to 10ms that is automatically added." This randomness help reduce the possibility of collisions between advertisements
  of different devices. 

Finding advertisement is critical

Apple, for example, recommends advertising on all 3 channels, as do other manufacturers.

The advertising interval is seperate from the connection interval, so just because your device is slower to form a connection doesn`t prevent you from sending
data quickly once the once the connection is established

## BLE advertising packets

preamble address + access address + package data unit (PDU) advertising/data + CRC 

The PDU includes the 2-byte header and a variable payload from 6 to 37 bytes

Several PDU types for the advertisement:

  ADV_IND        : generic, not directed and connectable

  ADV_NONCONN_IND: non connectable like a beacon

### PDU

  typically referred to as the bluetooth MAC address although it may change at will. 

  "The most important part of building the advertisement is getting the right information to the central device and this usually depends on
  what's important for your product. If your product provides unique service, you can advertise those services so that a smartphone can distinguish your product
  from others nearby"

  0xFF data type which is manufacturer specific, so you have the flexibility of defining your own custom payload, apple did this for the iBeacons which combine a 
  standard advertising data type with a manufacturer specific one.

New generations of Smartphones are making more and more of the decisions and filtering on the low level. They do this because it`s more energy efficient to discard 
an advertisement packet early on if it`s not used then it is to inform the OS and the user of it and discarding it later.

## UUID

It`s typical to arrange the UUID in the format 4-2-2-2-6. HEX

To avoid constantly transmitting 16 bytes which can be wasteful, the bluetooth SIG has adopted a standard UUID base. This base forms the first 96 bits (12 bytes) of 
the 128-bit UUID. The rest of the bits are defined by the Bluetooth SIG

  XXXXXXXX-0000-1000-8000-00805F9B34FB

However, custom services need a fully defined 128-bit UUID

For custom UUIDs, it`s important that you avoid the bluetooth SIG base in custom UUIDs.

# Optimize BLE advertisements for power and latency

around 500ms to 1s is a sweet spot for most products

More bytes mean higher power consumption. Each byte in the advertisement packets forces the radio to stay on longer to transmit, which uses more energy.

Enabling Bluetooth drains the battery faster, and some users will end up disabling bluetooth in frustration. Much of the power used by smartphone comes from scanning
for advertisements. Because of this, Android and iOS limit significantly the scanning, especially background scanning.

While your App is in the foreground, you basically have complete control of the BLE and you have a high priority. Once your application is in the background, looking for
nearby devices (if your application supports it), the OS usually downgrades the priority. This is done in a few ways:

  The scanning interval increases, so it takes longer to discover a peripheral device that is advertising. This is especially true if, for example, there is no BLE app in the foreground scanning.
  
  The OS will generate less advertisement discovery events, such as multiple discoveries of the same device.
  
Android and iOS each handle this separately, so it’s important to understand what effect running in the background has on your device and connection.

# Scan response

"When a a smartphone scans for advertisements, it can also request more information from the advertising device without forming a connection. 
This is done through a Scan Request which is a special packet that is sent to the peripheral. 
The BLE peripheral receives the Scan Request and responds with a Scan response."

"The Scan Response packet has the same packet format as the advertisement, 
with the exception of the type on the higher layer indicating it’s a scan response instead of an advertisement. 
So your scan response can provide the device name or other services you didn’t mention in the advertising packet."

"The scan response comes with a catch. 
If scan responses are enabled in a peripheral device, the device has to keep the radio in RX mode after it sent the advertisement to be able to receive the scan request packet. 
This has to be done even if there is no device out there that will actually send one (because the peripheral doesn’t know who is really out there). 
This means more energy consumed. For very low power applications, consider disabling the scan response if not absolutely needed."

Beacons are BLE peripherals that use advertisements exculsively, without allowing connections. The reason connections are not allowed is that if the beacons were to 
estabilish a connection, advertisements would have to stop, so no other device could find the beacon. 

References:

1. [Android Lollipop:Bluetooth LE Matures](https://www.youtube.com/watch?v=qx55Sa8UZAQ)

2. [Bluetooth for programmers](http://people.csail.mit.edu/rudolph/Teaching/Articles/BTBook-march.pdf)

3. [Bluetooth 4.0: An introduction to Bluetooth Low Energy—Part I](http://www.eetimes.com/document.asp?doc_id=1278927)

4. [Bluetooth 4.0: An introduction to Bluetooth Low Energy—Part II](http://www.eetimes.com/document.asp?doc_id=1278966)

5. [A BLE advertising primer](http://www.argenox.com/bluetooth-low-energy-ble-v4-0-development/library/a-ble-advertising-primer/)

Terminology:

Central Device

Host

Controller

SIG

Limited Discoverable mode?

General Discoverable mode? (iBeacon)

HCI: Provides a standarized and an arbitrary MCU which is hosting the application. If both parts of the stack are collocated on the same MCU
    HCI is not used

LL (Link Layer) Controller:

  is responsible for low level communication over a PHY interface. It manages the sequence and timing of transmitted and received frames, and using link layer
  protocol, communicate with other nodes regarding connection paramters and data flow control. It also handle frame received and transmitted while the device 
  is in advertising or scanner modes. The LL controller also provides gate keeping functionalitiy to limite exposure and data exchange with other devices.
  If filtering is configured, the LL controller maintains a "white list " of allowed devices and will ignore all requests for data exchange or advertising information
  from others. It not only helps with a security aspect but also reduces power consumption. The LL controller uses HCI to communicate with upper layers of the stack if
  they are not collocated

L2CAP (Logic Link Control and Adaption layer Protocol): 

  It is responsible for protocol multiplexing and data segmentation into smaller packets for the LL controller, and de-multiplexing and reassembly operation on the other end.

GAP

GATT

ATT

[CCCD](https://developer.bluetooth.org/gatt/descriptors/Pages/DescriptorViewer.aspx?u=org.bluetooth.descriptor.gatt.client_characteristic_configuration.xml)
