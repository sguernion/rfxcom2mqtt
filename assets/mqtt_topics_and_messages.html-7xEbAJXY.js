import{_ as a,r as i,o as t,c as o,a as e,b as n,d,w as c,e as r}from"./app-dc2per9E.js";const l={},u=e("h1",{id:"mqtt-topics-and-messages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mqtt-topics-and-messages","aria-hidden":"true"},"#"),n(" MQTT Topics and Messages")],-1),p=e("code",null,"rfxcom2MQTT",-1),m=e("code",null,"config.yaml",-1),v=r(`<h2 id="rfxcom2mqtt-bridge-info" tabindex="-1"><a class="header-anchor" href="#rfxcom2mqtt-bridge-info" aria-hidden="true">#</a> rfxcom2MQTT/bridge/info</h2><p>Contains information of the bridge. Whenever one of the attributes in the payload changes, this is republished. Example payload:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;receiverTypeCode&quot;</span><span class="token operator">:</span> <span class="token number">83</span><span class="token punctuation">,</span>
  <span class="token property">&quot;receiverType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;433.92MHz transceiver&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hardwareVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;firmwareVersion&quot;</span><span class="token operator">:</span> <span class="token number">242</span><span class="token punctuation">,</span>
  <span class="token property">&quot;firmwareType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ext&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;enabledProtocols&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;LIGHTING4&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;LACROSSE&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;AC&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;OREGON&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;HOMECONFORT&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;transmitterPower&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rfxcom2mqtt-bridge-state" tabindex="-1"><a class="header-anchor" href="#rfxcom2mqtt-bridge-state" aria-hidden="true">#</a> rfxcom2MQTT/bridge/state</h2><p>Contains the state of the bridge, this message is published as retained. Payloads are:</p><ul><li><code>online</code>: published when the bridge is running (on startup)</li><li><code>offline</code>: published right before the bridge stops</li></ul><h3 id="rfxcom2mqtt-devices-to-receive-incoming-messages" tabindex="-1"><a class="header-anchor" href="#rfxcom2mqtt-devices-to-receive-incoming-messages" aria-hidden="true">#</a> rfxcom2mqtt/devices** to receive incoming messages.</h3><p>Contains information of an device.</p><p>Example payload on topic <code>&quot;rfxcom2mqtt/devices/0x5C02&quot;</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    {
      &quot;title&quot;: &quot;Bathroom Temp &amp; Hum&quot;,
      &quot;type&quot;:&quot;temperaturehumidity1&quot;,
      &quot;subtype&quot;: 13,
      &quot;id&quot;: &quot;0x5C03&quot;,
      &quot;seqnbr&quot;: 12,
      &quot;temperature&quot;: 18,
      &quot;humidity&quot;: 74,
      &quot;humidityStatus&quot;: 3,
      &quot;batteryLevel&quot;: 9,
      &quot;rssi&quot;: 6
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="publish-command-examples-topic-payload" tabindex="-1"><a class="header-anchor" href="#publish-command-examples-topic-payload" aria-hidden="true">#</a> Publish command examples (topic/payload)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    rfxcom2mqtt/commmand/CucuDimmer
    on

    rfxcom2mqtt/commmand/CucuDimmer
    off

    rfxcom2mqtt/commmand/CucuDimmer
    level 15

    rfxcom2mqtt/commmand/Switch1 (lighting4, payload identifies device)
    on

    rfxcom2mqtt/commmand/Switch1
    off

    rfxcom2mqtt/commmand/Lights/Light1  (lighting2, unitName identifies device)
    on

    rfxcom2mqtt/commmand/Lights/Light1
    off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function b(h,q){const s=i("RouterLink");return t(),o("div",null,[u,e("p",null,[n("This page describes which MQTT topics are used by Rfxcom2MQTT. Note that the base topic (by default "),p,n(") is configurable in the "),d(s,{to:"/configuration/"},{default:c(()=>[n("Rfxcom2MQTT "),m]),_:1}),n(".")]),v])}const g=a(l,[["render",b],["__file","mqtt_topics_and_messages.html.vue"]]);export{g as default};
