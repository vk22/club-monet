<?php return array (
  'manifest-version' => '1.1',
  'manifest-attributes' => 
  array (
    'changelog' => 'Changelog for Sberbank.

1.2.30 pl
==============
- Compatible with miniShop2-4.x.x

1.2.29 pl
==============
- Add system setting send_customer

1.2.28 pl
==============
- Fix customerDetails param in request if empty

1.2.27 pl
==============
- Add debugging in system settings

1.2.26 pl
==============
- Add user e-mail to orderBundle

1.2.25 pl
==============
- Fix SberPay callback request

1.2.24 pl
==============
- Add return host

1.2.23 pl
==============
- Add pre auth

1.2.22 pl
==============
- Add lexicon entry for order description

1.2.21 pl
==============
- Fixed itemAmount when user have discount.

1.2.20 pl
==============
- Send delivery to OFD as service.

1.2.19 pl
==============
- Round itemAmounts when user have discount.

1.2.18 pl
==============
- Fix itemAmounts when user have discount for whole order.

1.2.17 pl
==============
- Fix itemAttributes in orderBundle

1.2.16 pl
==============
- Fix bug with log (call function toJSON on null)

1.2.15 pl
==============
- Added params paymentMethod and paymentObject

1.2.14 pl
==============
- Fix error while delivery price

1.2.13 pl
==============
- Fix add price for payment

1.2.12 pl
==============
- Fix sending free delivery to orderBundle

1.2.11 pl
==============
- Add select of paid order status

1.2.10 pl
==============
- Change method for receive order to POST

1.2.9 pl
==============
- Fix following changeOrderStatus bag

1.2.8 pl
==============
- Order register by POST request

1.2.7 pl
==============
- Fix amounts with float type

1.2.6 pl
==============
- Fix value for quantity measure in orderBundle

1.2.5 pl
==============
- Default value for quantity measure in orderBundle

1.2.4 pl
==============
- Settings moved to mspSberbank tab

1.2.3 pl
==============
- Setting for sessionTimeoutSecs is empty by default

1.2.2 pl
==============
- Add payment errors logging

1.2.1 pl
==============
- Add encrypting vehicle

1.2.0 pl
==============
- Save payment link in database

1.1.8 pl
==============
- Fix JSON encoding of respond

1.1.7 pl
==============
- Order number in description
- Fix sending api url when payment error detected

1.1.6 pl
==============
- Fix timeout sending

1.1.5 pl
==============
- Added payment link timeout

1.1.4 beta
==============
- Show order num in payment page.

1.1.3 beta
==============
- Fix Order getting bug.

1.1.2 beta
==============
- Fix getOption bug.

1.1.1 beta
==============
- Added lexicons.

1.1.0 beta
==============
- Fixed errors on receive of payments.

1.0.0 beta
==============
- Initial release.
',
    'license' => 'GNU GENERAL PUBLIC LICENSE
   Version 2, June 1991
--------------------------

Copyright (C) 1989, 1991 Free Software Foundation, Inc.
59 Temple Place, Suite 330, Boston, MA  02111-1307  USA

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

Preamble
--------

  The licenses for most software are designed to take away your
freedom to share and change it.  By contrast, the GNU General Public
License is intended to guarantee your freedom to share and change free
software--to make sure the software is free for all its users.  This
General Public License applies to most of the Free Software
Foundation\'s software and to any other program whose authors commit to
using it.  (Some other Free Software Foundation software is covered by
the GNU Library General Public License instead.)  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
this service if you wish), that you receive source code or can get it
if you want it, that you can change the software or use pieces of it
in new free programs; and that you know you can do these things.

  To protect your rights, we need to make restrictions that forbid
anyone to deny you these rights or to ask you to surrender the rights.
These restrictions translate to certain responsibilities for you if you
distribute copies of the software, or if you modify it.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must give the recipients all the rights that
you have.  You must make sure that they, too, receive or can get the
source code.  And you must show them these terms so they know their
rights.

  We protect your rights with two steps: (1) copyright the software, and
(2) offer you this license which gives you legal permission to copy,
distribute and/or modify the software.

  Also, for each author\'s protection and ours, we want to make certain
that everyone understands that there is no warranty for this free
software.  If the software is modified by someone else and passed on, we
want its recipients to know that what they have is not the original, so
that any problems introduced by others will not reflect on the original
authors\' reputations.

  Finally, any free program is threatened constantly by software
patents.  We wish to avoid the danger that redistributors of a free
program will individually obtain patent licenses, in effect making the
program proprietary.  To prevent this, we have made it clear that any
patent must be licensed for everyone\'s free use or not licensed at all.

  The precise terms and conditions for copying, distribution and
modification follow.


GNU GENERAL PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
---------------------------------------------------------------

  0. This License applies to any program or other work which contains
a notice placed by the copyright holder saying it may be distributed
under the terms of this General Public License.  The "Program", below,
refers to any such program or work, and a "work based on the Program"
means either the Program or any derivative work under copyright law:
that is to say, a work containing the Program or a portion of it,
either verbatim or with modifications and/or translated into another
language.  (Hereinafter, translation is included without limitation in
the term "modification".)  Each licensee is addressed as "you".

Activities other than copying, distribution and modification are not
covered by this License; they are outside its scope.  The act of
running the Program is not restricted, and the output from the Program
is covered only if its contents constitute a work based on the
Program (independent of having been made by running the Program).
Whether that is true depends on what the Program does.

  1. You may copy and distribute verbatim copies of the Program\'s
source code as you receive it, in any medium, provided that you
conspicuously and appropriately publish on each copy an appropriate
copyright notice and disclaimer of warranty; keep intact all the
notices that refer to this License and to the absence of any warranty;
and give any other recipients of the Program a copy of this License
along with the Program.

You may charge a fee for the physical act of transferring a copy, and
you may at your option offer warranty protection in exchange for a fee.

  2. You may modify your copy or copies of the Program or any portion
of it, thus forming a work based on the Program, and copy and
distribute such modifications or work under the terms of Section 1
above, provided that you also meet all of these conditions:

    a) You must cause the modified files to carry prominent notices
    stating that you changed the files and the date of any change.

    b) You must cause any work that you distribute or publish, that in
    whole or in part contains or is derived from the Program or any
    part thereof, to be licensed as a whole at no charge to all third
    parties under the terms of this License.

    c) If the modified program normally reads commands interactively
    when run, you must cause it, when started running for such
    interactive use in the most ordinary way, to print or display an
    announcement including an appropriate copyright notice and a
    notice that there is no warranty (or else, saying that you provide
    a warranty) and that users may redistribute the program under
    these conditions, and telling the user how to view a copy of this
    License.  (Exception: if the Program itself is interactive but
    does not normally print such an announcement, your work based on
    the Program is not required to print an announcement.)

These requirements apply to the modified work as a whole.  If
identifiable sections of that work are not derived from the Program,
and can be reasonably considered independent and separate works in
themselves, then this License, and its terms, do not apply to those
sections when you distribute them as separate works.  But when you
distribute the same sections as part of a whole which is a work based
on the Program, the distribution of the whole must be on the terms of
this License, whose permissions for other licensees extend to the
entire whole, and thus to each and every part regardless of who wrote it.

Thus, it is not the intent of this section to claim rights or contest
your rights to work written entirely by you; rather, the intent is to
exercise the right to control the distribution of derivative or
collective works based on the Program.

In addition, mere aggregation of another work not based on the Program
with the Program (or with a work based on the Program) on a volume of
a storage or distribution medium does not bring the other work under
the scope of this License.

  3. You may copy and distribute the Program (or a work based on it,
under Section 2) in object code or executable form under the terms of
Sections 1 and 2 above provided that you also do one of the following:

    a) Accompany it with the complete corresponding machine-readable
    source code, which must be distributed under the terms of Sections
    1 and 2 above on a medium customarily used for software interchange; or,

    b) Accompany it with a written offer, valid for at least three
    years, to give any third party, for a charge no more than your
    cost of physically performing source distribution, a complete
    machine-readable copy of the corresponding source code, to be
    distributed under the terms of Sections 1 and 2 above on a medium
    customarily used for software interchange; or,

    c) Accompany it with the information you received as to the offer
    to distribute corresponding source code.  (This alternative is
    allowed only for noncommercial distribution and only if you
    received the program in object code or executable form with such
    an offer, in accord with Subsection b above.)

The source code for a work means the preferred form of the work for
making modifications to it.  For an executable work, complete source
code means all the source code for all modules it contains, plus any
associated interface definition files, plus the scripts used to
control compilation and installation of the executable.  However, as a
special exception, the source code distributed need not include
anything that is normally distributed (in either source or binary
form) with the major components (compiler, kernel, and so on) of the
operating system on which the executable runs, unless that component
itself accompanies the executable.

If distribution of executable or object code is made by offering
access to copy from a designated place, then offering equivalent
access to copy the source code from the same place counts as
distribution of the source code, even though third parties are not
compelled to copy the source along with the object code.

  4. You may not copy, modify, sublicense, or distribute the Program
except as expressly provided under this License.  Any attempt
otherwise to copy, modify, sublicense or distribute the Program is
void, and will automatically terminate your rights under this License.
However, parties who have received copies, or rights, from you under
this License will not have their licenses terminated so long as such
parties remain in full compliance.

  5. You are not required to accept this License, since you have not
signed it.  However, nothing else grants you permission to modify or
distribute the Program or its derivative works.  These actions are
prohibited by law if you do not accept this License.  Therefore, by
modifying or distributing the Program (or any work based on the
Program), you indicate your acceptance of this License to do so, and
all its terms and conditions for copying, distributing or modifying
the Program or works based on it.

  6. Each time you redistribute the Program (or any work based on the
Program), the recipient automatically receives a license from the
original licensor to copy, distribute or modify the Program subject to
these terms and conditions.  You may not impose any further
restrictions on the recipients\' exercise of the rights granted herein.
You are not responsible for enforcing compliance by third parties to
this License.

  7. If, as a consequence of a court judgment or allegation of patent
infringement or for any other reason (not limited to patent issues),
conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot
distribute so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you
may not distribute the Program at all.  For example, if a patent
license would not permit royalty-free redistribution of the Program by
all those who receive copies directly or indirectly through you, then
the only way you could satisfy both it and this License would be to
refrain entirely from distribution of the Program.

If any portion of this section is held invalid or unenforceable under
any particular circumstance, the balance of the section is intended to
apply and the section as a whole is intended to apply in other
circumstances.

It is not the purpose of this section to induce you to infringe any
patents or other property right claims or to contest validity of any
such claims; this section has the sole purpose of protecting the
integrity of the free software distribution system, which is
implemented by public license practices.  Many people have made
generous contributions to the wide range of software distributed
through that system in reliance on consistent application of that
system; it is up to the author/donor to decide if he or she is willing
to distribute software through any other system and a licensee cannot
impose that choice.

This section is intended to make thoroughly clear what is believed to
be a consequence of the rest of this License.

  8. If the distribution and/or use of the Program is restricted in
certain countries either by patents or by copyrighted interfaces, the
original copyright holder who places the Program under this License
may add an explicit geographical distribution limitation excluding
those countries, so that distribution is permitted only in or among
countries not thus excluded.  In such case, this License incorporates
the limitation as if written in the body of this License.

  9. The Free Software Foundation may publish revised and/or new versions
of the General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

Each version is given a distinguishing version number.  If the Program
specifies a version number of this License which applies to it and "any
later version", you have the option of following the terms and conditions
either of that version or of any later version published by the Free
Software Foundation.  If the Program does not specify a version number of
this License, you may choose any version ever published by the Free Software
Foundation.

  10. If you wish to incorporate parts of the Program into other free
programs whose distribution conditions are different, write to the author
to ask for permission.  For software which is copyrighted by the Free
Software Foundation, write to the Free Software Foundation; we sometimes
make exceptions for this.  Our decision will be guided by the two goals
of preserving the free status of all derivatives of our free software and
of promoting the sharing and reuse of software generally.

NO WARRANTY
-----------

  11. BECAUSE THE PROGRAM IS LICENSED FREE OF CHARGE, THERE IS NO WARRANTY
FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW.  EXCEPT WHEN
OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES
PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED
OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.  THE ENTIRE RISK AS
TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU.  SHOULD THE
PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING,
REPAIR OR CORRECTION.

  12. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR
REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES,
INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING
OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED
TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY
YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER
PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE
POSSIBILITY OF SUCH DAMAGES.

---------------------------
END OF TERMS AND CONDITIONS',
    'readme' => '--------------------
mspSberbank
--------------------
Author: Ilya Utkin <ilyautkin@mail.ru>
--------------------

Sberbank payment method for miniShop2',
  ),
  'manifest-vehicles' => 
  array (
    0 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modNamespace',
      'guid' => 'f7eafe689b35eae177e3399fcaa863e3',
      'native_key' => 'mspsberbank',
      'filename' => 'modNamespace/8c38a22f013320375a3fcf422f737dff.vehicle',
      'namespace' => 'mspsberbank',
    ),
    1 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOFileVehicle',
      'class' => 'xPDOFileVehicle',
      'guid' => '0a52611ee4efaf3664f704af46347b39',
      'native_key' => '0a52611ee4efaf3664f704af46347b39',
      'filename' => 'xPDOFileVehicle/e35cb3f318ab91eb35511055933c3cbe.vehicle',
    ),
    2 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '618719ab774b9d94cd189d5d610a2312',
      'native_key' => 'ms2_payment_sbrbnk_url',
      'filename' => 'modSystemSetting/b492cfc09073b2516645addf7a726a0b.vehicle',
      'namespace' => 'mspsberbank',
    ),
    3 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'b01235a2c5530ee1a1bdf38382520d41',
      'native_key' => 'ms2_payment_sbrbnk_login',
      'filename' => 'modSystemSetting/8a9028633096a853e9b9aca4459454de.vehicle',
      'namespace' => 'mspsberbank',
    ),
    4 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'ea096ae2737485d7ebe145e805042d43',
      'native_key' => 'ms2_payment_sbrbnk_pass',
      'filename' => 'modSystemSetting/18142f863461b7e4eda2aec59b081086.vehicle',
      'namespace' => 'mspsberbank',
    ),
    5 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'd37453e29d6f4247d293f8442f3d5496',
      'native_key' => 'ms2_payment_sbrbnk_currency',
      'filename' => 'modSystemSetting/1ba183549b2b44d2963f14baf02f393b.vehicle',
      'namespace' => 'mspsberbank',
    ),
    6 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '8dd4fe4b15ac8ac2a026162d2cfe7af6',
      'native_key' => 'ms2_payment_sbrbnk_culture',
      'filename' => 'modSystemSetting/2e3e1c5ad1df7da5f382d86c1ae93e49.vehicle',
      'namespace' => 'mspsberbank',
    ),
    7 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '6716840e1cb68b54cadedf65ee461c4f',
      'native_key' => 'ms2_payment_sbrbnk_success_id',
      'filename' => 'modSystemSetting/bbcd2d75eb09c07f1d68245a0ffbc91f.vehicle',
      'namespace' => 'mspsberbank',
    ),
    8 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '741a3586fc66ef8019002ba00368107a',
      'native_key' => 'ms2_payment_sbrbnk_failure_id',
      'filename' => 'modSystemSetting/7168e8562b0a26286770a4e5e4cb97dc.vehicle',
      'namespace' => 'mspsberbank',
    ),
    9 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '75af3e90afa1f02f94c0ba1827e19bd0',
      'native_key' => 'ms2_payment_sbrbnk_timeout',
      'filename' => 'modSystemSetting/11bfb8a9bab6206fcae0464bb87ae8c5.vehicle',
      'namespace' => 'mspsberbank',
    ),
    10 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'dbdfb8d359a5a5dd7d49968a6d337853',
      'native_key' => 'ms2_payment_sbrbnk_tax_type',
      'filename' => 'modSystemSetting/2746202e81b26f99ef45b84b929a21d1.vehicle',
      'namespace' => 'mspsberbank',
    ),
    11 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'c99ead1d8ea646772a3b752a8b60b972',
      'native_key' => 'ms2_payment_sbrbnk_paid_status',
      'filename' => 'modSystemSetting/7e04ec26bcbe1faa037504920748c8e3.vehicle',
      'namespace' => 'mspsberbank',
    ),
    12 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '0958fe024c5ec67b2c0acb09eb99e6e0',
      'native_key' => 'ms2_payment_sbrbnk_PreAuth',
      'filename' => 'modSystemSetting/f58bb7cfdcc8aca3da3ef08e3c5f7efa.vehicle',
      'namespace' => 'mspsberbank',
    ),
    13 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'bd6db2fad4b09144b9cc8e25af1af5ae',
      'native_key' => 'ms2_payment_sbrbnk_return_host',
      'filename' => 'modSystemSetting/7f2a01e48e4eee1f4deb02d019f99ad8.vehicle',
      'namespace' => 'mspsberbank',
    ),
    14 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '23728a83adadeb84526442375ee6fc7e',
      'native_key' => 'ms2_payment_sbrbnk_ofd.payment_method',
      'filename' => 'modSystemSetting/824fd844544cf6c6fa394f9d7aa4c958.vehicle',
      'namespace' => 'mspsberbank',
    ),
    15 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '93aa0fe081b0bdcffca10e40f00befa2',
      'native_key' => 'ms2_payment_sbrbnk_ofd.payment_object',
      'filename' => 'modSystemSetting/c2781826cc909a0195ea361d43cd8633.vehicle',
      'namespace' => 'mspsberbank',
    ),
    16 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'd4d4f450667f8cdac802a54c5186de6e',
      'native_key' => 'ms2_payment_sbrbnk_ofd.payment_delivery_object',
      'filename' => 'modSystemSetting/9b839752601d98b151a8f59db1d8692c.vehicle',
      'namespace' => 'mspsberbank',
    ),
    17 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '9e60afe10946d645a4288a810d4c4ffb',
      'native_key' => 'ms2_payment_sbrbnk_ofd.use_payment_delivery_object',
      'filename' => 'modSystemSetting/1a4958f1ddf1bd299191785251339080.vehicle',
      'namespace' => 'mspsberbank',
    ),
    18 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '3879f6c9847539eacb3dedda880ef499',
      'native_key' => 'ms2_payment_sbrbnk_debug',
      'filename' => 'modSystemSetting/4dc4e2863a8d2612fbfed32f40b7b493.vehicle',
      'namespace' => 'mspsberbank',
    ),
    19 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'b3e48c3f8ddb7ff8758f21ab2d65c79a',
      'native_key' => 'ms2_payment_sbrbnk_send_customer',
      'filename' => 'modSystemSetting/aced0b6cab3b3225d321f2b8eeebe386.vehicle',
      'namespace' => 'mspsberbank',
    ),
    20 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOScriptVehicle',
      'class' => 'xPDOScriptVehicle',
      'guid' => '8724c641fd478f7d5013b7808d548338',
      'native_key' => '8724c641fd478f7d5013b7808d548338',
      'filename' => 'xPDOScriptVehicle/e68670f78f3829fa5af4506c884c33e9.vehicle',
      'namespace' => 'mspsberbank',
    ),
    21 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'encryptedVehicle',
      'class' => 'modCategory',
      'guid' => '00570a7fb3476253b8c3e8a7e8ccda88',
      'native_key' => NULL,
      'filename' => 'modCategory/783c127bf7c2c5747b08ab0ba0276b2e.vehicle',
      'namespace' => 'mspsberbank',
    ),
  ),
);