# Machine-to-Machine (M2M) Communication

## Protocols

### MQTT
MQTT is a light-weight protocol used for Machine to Machine (M2M) communication. MQTT used a publish/subscribe message forwarding model built on top of TCP/IP protocol.
Central to the MQTT protocol is an MQTT server or broker that is accessible to both publishers and subscribers. Using MQTT, one can build a sensor network where various
sensors can publish their sensor values in the form of a message unque to each sensor. Actuators can subscribe to different messages that they can act upon. The MQTT broker
will take care of forwarding messages from publishers to subscribers.

What else?

CoAP, APMQ, DDS ... ?

References:

1. [building and running mosquitto MQTT on Intel Edison](https://software.intel.com/en-us/blogs/2015/02/20/building-and-running-mosquitto-mqtt-on-intel-edison)

HiveMQ 10 articles series post on MQTT

2. [MQTT essentials Client Broker Connection Establishment](http://www.hivemq.com/blog/mqtt-essentials-part-3-client-broker-connection-establishment)

3. [What`s differece between DDS and AMQP?](http://electronicdesign.com/embedded/what-s-difference-between-dds-and-amqp) 
