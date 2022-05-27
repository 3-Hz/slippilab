import { Character } from './character'

import { ActionName } from '../../common/ids'
export const mrGameAndWatch: Character = {
  scale: 1.02,
  shieldOffset: [0, 4.828], // TODO
  shieldSize: 1.02 * 10.75,
  animationMap: new Map<ActionName, string>([
    ['AppealL', 'Appeal'],
    ['AppealR', 'Appeal'],
    ['AttackS3Hi', 'AttackS3Hi'],
    ['AttackS3HiS', 'AttackS3Hi'],
    ['AttackS3Lw', 'AttackS3Lw'],
    ['AttackS3LwS', 'AttackS3Lw'],
    ['AttackS3S', 'AttackS3'],
    ['AttackS4Hi', ''],
    ['AttackS4HiS', ''],
    ['AttackS4Lw', ''],
    ['AttackS4LwS', ''],
    ['AttackS4S', 'AttackS4'],
    ['BarrelWait', ''],
    ['Bury', ''],
    ['BuryJump', ''],
    ['BuryWait', ''],
    ['CaptureCaptain', ''],
    ['CaptureDamageKoopa', ''],
    ['CaptureDamageKoopaAir', ''],
    ['CaptureKirby', ''],
    ['CaptureKirbyYoshi', ''],
    ['CaptureKoopa', ''],
    ['CaptureKoopaAir', ''],
    ['CaptureMewtwo', ''],
    ['CaptureMewtwoAir', ''],
    ['CaptureWaitKirby', ''],
    ['CaptureWaitKoopa', ''],
    ['CaptureWaitKoopaAir', ''],
    ['CaptureYoshi', ''],
    ['CatchDashPull', 'CatchWait'],
    ['CatchPull', 'CatchWait'],
    ['DamageBind', ''],
    ['DamageIce', ''],
    ['DamageIceJump', 'Fall'],
    ['DamageSong', ''],
    ['DamageSongRv', ''],
    ['DamageSongWait', ''],
    ['DeadDown', ''],
    ['DeadLeft', ''],
    ['DeadRight', ''],
    ['DeadUpFallHitCamera', ''],
    ['DeadUpFallHitCameraIce', ''],
    ['DeadUpFallIce', ''],
    ['DeadUpStar', ''],
    ['DeadUpStarIce', ''],
    ['DownReflect', ''],
    ['EntryEnd', 'Entry'],
    ['EntryStart', 'Entry'],
    ['Escape', 'EscapeN'],
    ['FlyReflectCeil', ''],
    ['FlyReflectWall', 'WallDamage'],
    ['Guard', 'Guard'],
    ['GuardOff', 'GuardOff'],
    ['GuardOn', 'GuardOn'],
    ['GuardReflect', 'Guard'],
    ['GuardSetOff', 'GuardDamage'],
    ['ItemParasolDamageFall', ''],
    ['ItemParasolFall', ''],
    ['ItemParasolFallSpecial', ''],
    ['ItemParasolOpen', ''],
    ['KirbyYoshiEgg', ''],
    ['KneeBend', 'Landing'],
    ['LandingFallSpecial', 'Landing'],
    ['LiftTurn', ''],
    ['LiftWait', ''],
    ['LiftWalk1', ''],
    ['LiftWalk2', ''],
    ['LightThrowAirB4', 'LightThrowAirB'],
    ['LightThrowAirF4', 'LightThrowAirF'],
    ['LightThrowAirHi4', 'LightThrowAirHi'],
    ['LightThrowAirLw4', 'LightThrowAirLw'],
    ['LightThrowB4', 'LightThrowB'],
    ['LightThrowF4', 'LightThrowF'],
    ['LightThrowHi4', 'LightThrowHi'],
    ['LightThrowLw4', 'LightThrowLw'],
    ['Rebirth', 'Entry'],
    ['RebirthWait', 'Wait1'],
    ['ReboundStop', 'Rebound'],
    ['RunDirect', ''],
    ['ShieldBreakDownD', 'DownBoundD'],
    ['ShieldBreakDownU', 'DownBoundU'],
    ['ShieldBreakFall', 'DamageFall'],
    ['ShieldBreakFly', ''],
    ['ShieldBreakStandD', 'DownStandD'],
    ['ShieldBreakStandU', 'DownStandU'],
    ['ShoulderedTurn', ''],
    ['ShoulderedWait', ''],
    ['ShoulderedWalkFast', ''],
    ['ShoulderedWalkMiddle', ''],
    ['ShoulderedWalkSlow', ''],
    ['SwordSwing1', 'Swing1'],
    ['SwordSwing3', 'Swing3'],
    ['SwordSwing4', 'Swing4'],
    ['SwordSwingDash', 'SwingDash'],
    ['ThrownB', ''],
    ['ThrownCopyStar', ''],
    ['ThrownF', ''],
    ['ThrownFB', ''],
    ['ThrownFF', ''],
    ['ThrownFHi', ''],
    ['ThrownFLw', ''],
    ['ThrownHi', ''],
    ['ThrownKirby', ''],
    ['ThrownKirbyStar', ''],
    ['ThrownKoopaAirB', ''],
    ['ThrownKoopaAirF', ''],
    ['ThrownKoopaB', ''],
    ['ThrownKoopaF', ''],
    ['ThrownLw', ''],
    ['ThrownLwWomen', ''],
    ['ThrownMewtwo', ''],
    ['ThrownMewtwoAir', ''],
    ['Wait', 'Wait1'],
    ['YoshiEgg', '']
  ]),
  specialsMap: new Map<number, string>([
    [341, 'Attack11'],
    [342, 'Attack11'],
    [343, 'Attack100Start'],
    [344, 'Attack100End'],
    [345, 'AttackLw3'],
    [346, 'AttackS4'],
    [347, 'AttackAirN'],
    [348, 'AttackAirB'],
    [349, 'AttackAirHi'],
    [350, 'LandingAirN'],
    [351, 'LandingAirB'],
    [352, 'LandingAirHi'],
    [353, 'SpecialN'],
    [354, 'SpecialAirN'],
    [355, 'SpecialS'], // 1
    [356, 'SpecialS'], // 2
    [357, 'SpecialS'], // 3
    [358, 'SpecialS'], // 4
    [359, 'SpecialS'], // 5
    [360, 'SpecialS'], // 6
    [361, 'SpecialS'], // 7
    [362, 'SpecialS'], // 8
    [363, 'SpecialS'], // 9
    [364, 'SpecialAirS'], // 1
    [365, 'SpecialAirS'], // 2
    [366, 'SpecialAirS'], // 3
    [367, 'SpecialAirS'], // 4
    [368, 'SpecialAirS'], // 5
    [369, 'SpecialAirS'], // 6
    [370, 'SpecialAirS'], // 7
    [371, 'SpecialAirS'], // 8
    [372, 'SpecialAirS'], // 9
    [373, 'SpecialHi'],
    [374, 'SpecialAirHi'],
    [375, 'SpecialLw'],
    [376, 'SpecialLwCatch'],
    [377, 'SpecialLwShoot'],
    [378, 'SpecialAirLw'],
    [379, 'SpecialAirLwCatch'],
    [380, 'SpecialAirLwShoot']
  ])
}
