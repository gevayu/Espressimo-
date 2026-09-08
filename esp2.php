<?php
$c=$args[0]??'';$p=(int)($args[1]??0);
$B=['JURA','La Marzocco','ECM','Quick Mill','Profitec','Kalerm','DR Coffee','Stone','La Pavoni','Rancilio'];
$d=json_decode(get_post_meta($p,'_elementor_data',true),true);
if(!is_array($d)){fwrite(STDERR,"NODATA $p\n");exit;}
$n=0;$r=[];
$w=function(&$e)use(&$w,$B,$c,&$n,&$r){foreach($e as &$x){$s=&$x['settings'];$t=trim(strip_tags((string)($s['title']??$s['text']??'')));$u=$s['link']['url']??($s['url']??'');if($c=='dump'){if($t!==''||$u!=='')$r[]=($x['widgetType']??$x['elType']??'')."|$t|$u";}elseif(in_array($t,$B,true)){$nu=home_url('/?s='.rawurlencode($t));if(isset($s['link'])){$s['link']['url']=$nu;$s['link']['is_external']='';$s['link']['nofollow']='';}else $s['url']=$nu;$n++;$r[]="SET $t";}unset($s);if(!empty($x['elements']))$w($x['elements']);}unset($x);};
$w($d);
if($c=='set'){update_post_meta($p,'_elementor_data',wp_slash(wp_json_encode($d)));if(class_exists('\Elementor\Plugin'))\Elementor\Plugin::$instance->files_manager->clear_cache();echo "SAVED $p n=$n\n";}
foreach($r as $x)fwrite(STDERR,$x."\n");
