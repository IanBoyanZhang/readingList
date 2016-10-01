#

## Low Power RF

TI Design Note DN019
1. [Powering Low-Power RF Products](http://www.ti.com/lit/an/swra173b/swra173b.pdf)

Power Supply Efficiency

Duty cycle between active and sleep mode as well as the quiescent current

Quiescent current vs high load current

Low duty cycle application: 


## Terminology

LDO (low drop out)


Good RF performance

Low voltage ripple, ripple can impact the sensitivity or generate spurs due to the inter modulation

Influence factors are 

DC/DC converter type
Switching frequency
Ripple rejection of the radio`s internal voltage regulator
Configuration of the radio (in terms of intermediate frequency IF)
Receiver Filter bandwidth

The recommended IF and receiver filter bandwidth is different for different data rates and
different radio

Common for all LPW devices is that the IF and filter bandwidth are optimized with respect to sensitivity, frequency offset, and stable operation across

Temperature,
Supply Voltage
Process variation

Supply voltage with low ripple is required to achieve good RF performance. Ripple can impact the sensitivity or generate spurs due to inter-modulation.
